import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, addAppointment }) => {
  /*
  Define state variables for 
  appointment info
  */

  const [name, setName] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [contact, setContact] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(name, contact, date, time);
    setName("");
    setCurrentDate("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div className="container">
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
        name={name}
        setName={setName}
        contact={contact}
        contacts={contacts}
        setContact={setContact}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        handleSubmit={handleSubmit}
/>

      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};