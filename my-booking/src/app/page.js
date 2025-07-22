'use client'
import { useState } from "react";
import Slots from "./components/slots";
import ReservedSlots from "./components/reservedSlots";
import moment from "moment";
import { 
  Container, 
  Grid, 
  Typography,
  Box,
  AppBar,
  Toolbar
} from "@mui/material";

export default function Home() {

  let currentDate = moment();
  // let bookedSlots = [];
  let [bookedSlots, setBookedSlots] = useState(["21:00", "20:30", "11:00"]);
  let [allSlots, setAllSlots] = useState(GetNextAvailableSlot(bookedSlots, currentDate));

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Bookings for {currentDate.format("MM/DD/YYYY")}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container 
        sx={{
          width: 2000,
          height: 300,
          marginTop: 1,
        }}
      >
        <Typography variant="h5" component="div" sx={{ 
            flexGrow: 1,
            marginBottom: 2,
          }}
        >
          Reserved Slots
        </Typography>
        
        <Grid container spacing={2}>
          {
            bookedSlots.length != 0 ? bookedSlots.sort().map( (timeSlot, index) => {
              return <Grid key={index} size={2}>
                <ReservedSlots key={index} time={timeSlot} />
              </Grid>
            }) : <Typography variant="h5" component="div">No Reserved Slots</Typography>
          }
        </Grid>
      </Container>
      <Container 
        sx={{
          width: 2000,
          height: 300
        }}
      >
        <Typography variant="h5" component="div" 
          sx={{ 
            flexGrow: 1,
            marginBottom: 2,
          }}
        >
          Available Slots
        </Typography>
        <Grid alignItems={'center'} container spacing={2}>
          {
            allSlots.length != 0 ? allSlots.sort().map( (timeSlot, index) => {
              return <Grid key={index} size={2}>
                <Slots key={index} time={timeSlot} onClick={ReserveSlot} />
              </Grid>
            })   : <Typography variant="h5" component="div">No Reserved Slots</Typography>
          }
        </Grid>
      </Container>
    </>
  );

  function ReserveSlot (time) {
    bookedSlots.push(time)

    setAllSlots(GetNextAvailableSlot(bookedSlots, currentDate));
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

    console.log(bookings)

    slots = slots.filter((slot) => {
      if (!bookings.includes(slot.toString())) {
        return slot >= setDate.format("HH:mm");
      }
    });

    return slots;
  }
}


