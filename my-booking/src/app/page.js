import Slots from "./components/slots";
import moment from "moment";
import { Stack } from "@mui/material";

export default function Home() {

  let currentDate = moment();
  let bookedSlots = ["21:00", "20:30", "11:00"];
  let allSlots = GetNextAvailableSlot(bookedSlots, currentDate);

  return (
    <>
      <h1>Bookings for {currentDate.format("MM/DD/YYYY")}</h1>
      <hr/>
      <h1>Reserved Slots</h1>
      <Stack direction="row" spacing={2}>
        {
          bookedSlots.sort().map( (timeSlot, index) => {
            return <Slots key={index} time={timeSlot} />
          })
        }
      </Stack>
      <h1>Available Slots</h1>
      <Stack direction="row" spacing={2}>
        {
          allSlots.map( (timeSlot, index) => {
            return <Slots key={index} time={timeSlot} />
          })
        }
      </Stack>
    </>
  );
}

function GetNextAvailableSlot (bookings, setDate) {
  let slots = [];
  let setRemainingHours = (23 - setDate.get('hour')) * 2;
  let currentTime = setDate;
  currentTime = moment();
  currentTime.set({minute:0});

  for (let i = 0; i <= setRemainingHours; i++) {
    currentTime.add({minute:30});
    slots.push(currentTime.format("HH:mm"));
  }

  slots = slots.filter((slot) => {
    if (!bookings.includes(slot.toString())) {
      return slot >= setDate.format("HH:mm");
    }
  });

  return slots;
}
