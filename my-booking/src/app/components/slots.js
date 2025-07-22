import React from 'react'

const Slots = () => {
  let availableSlots = new Date("2025-07-22");
  availableSlots.setHours(10, 0o0, 0o0)

  return (
    <h1>BookSlots {availableSlots.toLocaleTimeString()}</h1>
  )
}

export default Slots