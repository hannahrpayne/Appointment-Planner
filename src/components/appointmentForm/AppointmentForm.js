import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  name, 
  setName,
  contact,
  setContact,
  date,
  setDate,
  setTime,
  handleSubmit,
  time,
  contacts
}) => {

  return (
    <>
     <form onSubmit={handleSubmit}>
     <label>
        Contact:
        <ContactPicker name={name} contacts={contacts} value={contact} onChange={(e) => setContact(e.target.value)} />
      </label>
      <br />
      <label>
        Appointment Title :
        <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} aria-label="Name Picker" required />
      </label>
      <br />
      <label>
        Date:
        <input type="date" value={date} name="date" onChange={(e) => setDate(e.target.value)} min={getTodayString()} aria-label="Date Picker" required />
      </label>
      <br />
      <label>
        Time:
        <input type="time" name={time} value={time} onChange={(e) => setTime(e.target.value)} required  aria-label="Time Picker" />
      </label>
      <br />
      
      <input type="submit" value="Submit" />
    </form>
    </>
  );
};
