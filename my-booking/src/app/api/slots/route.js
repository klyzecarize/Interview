import moment from "moment";

let currentDate = moment();

const slots = [
    {
    "name": "John Snow",
    "time": "21:00"
    }, 
    {
    "name": "Stewie Griffin",
    "time": "20:30"
    },
    {
    "name": "Patrick Star",
    "time": "11:00"
    }
];

const result = {
    'reserved': slots,
    'available': GetNextAvailableSlot (slots, currentDate)
};

export async function GET(request) {
    return new Response(JSON.stringify(result), {
        status: 200,
        headers: {'Content-Type': 'application/json'}
    });
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

    bookings.forEach(reservedSlot => {
      slots = slots.filter(slot => {
        if (!reservedSlot.time.includes(slot.toString())) {
          return  slot >= setDate.format("HH:mm");
        }
      })
    });
    return slots;
}