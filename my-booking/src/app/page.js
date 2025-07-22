import Slots from "./components/slots";
import moment from "moment";

export default function Home() {

  let currentDate = moment();
  let allSlots = GetSlots(currentDate);
  // let bookedSlots = ["10:00", "10:30", "11:00"];
  let bookedSlots = ["21:00", "20:30", "11:00"];
  allSlots = allSlots
  .filter((slot) => {
    if (!bookedSlots.includes(slot.toString())) {
      return slot >= currentDate.format("HH:mm");
    }
  });
  // allSlots.shift();

  return (
    <>
      <h1>Booking</h1>
      <h1>Available Slots for {currentDate.format("MM/DD/YYYY")}</h1>
      {
        allSlots.map( (timeSlot, index) => {
          return <Slots key={index} time={timeSlot} />
        })
      }
    </>
  );
}

function GetSlots (setTime) {
  let slots = [];
  let setRemainingHours = (23 - setTime.get('hour')) * 2;
  let currentTime = setTime;
  currentTime = moment();
  currentTime.set({minute:0});

  // slots.push(currentTime.format("HH:mm"));

  for (let i = 0; i <= setRemainingHours; i++) {
    currentTime.add({minute:30})
    slots.push(currentTime.format("HH:mm"));
  }

  return slots;
}
