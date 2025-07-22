import Slots from "./components/slots";
import moment from "moment";

export default function Home() {
  let allSlots = GetSlots();

  console.log(allSlots)

  return (
    <>
      <h1>Booking</h1>
      {
        allSlots.map( (timeSlot, index) => {
          return <Slots key={index} time={timeSlot} />
        })
      }
    </>
  );
}

function GetSlots () {
  let slots = [];
  let currentTime = moment("2025-07-22", "HH:mm");
  currentTime.set({hour:8, minute:0});
  slots.push(currentTime.format("hh:mm"));

  for (let i = 0; i <= 17; i++) {
    currentTime.add({minute:30})
    slots.push(currentTime.format("hh:mm"));
  }

  return slots;
}
