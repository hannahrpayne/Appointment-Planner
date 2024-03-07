import React, {useState, useEffect} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { Header } from "./components/Header/Header"



function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [appointments, setAppointments] = useState([
    
  ]);

  console.log(appointments);

  const [contacts, setContacts] = useState([]);
  /*
  Implement functions to add data to
  contacts and appointments
  */
  // <input
  //       value={appointments}
  //       onChange={e => setAppointments(e.target.value)}
  //     />
  //     <button onClick={() => {
  //       setAppointments([
  //         ...appointments,
  //         { id: nextId++, name: appointments }
  //       ]);
  //     }}>Add</button>
  //     <ul>
  //       {appointments.map(appointments=> (
  //         <li key={appointments.id}>{appointments.name}</li>
  //       ))}
  //     </ul>

  const addAppointment = (name, contact, date, time) => {

    // const newAppointment = { 
    //   name: name,
    //   date: date,
    //   time: time,
    //   contact: contact
    // }

    setAppointments([...appointments, 
      { 
      name: name,
      date: date,
      time: time,
      contact: contact
    }]);

    // ( appointments.map((appointments) => 

    console.log("New Appointment", name)
  };

  // const addContact = (title, contact, date, time) => {
  //   setContacts( contacts.map((contacts) => [...contacts, 
  //     { 
  //       name: title,
  //       contact: contact,
  //       date: date,
  //       time: time
  //     }]));
  // };

  const addContact = (name, phone, email) => {
    const newContact =  
      { 
        name: name,
        phone: phone,
        email: email,
      };

      setContacts([...contacts, newContact]);

      console.log("New Contact", name)
  };
  // addNote(newNote) {
  //   this.setState({ toDoNotes: [...this.state.toDoNotes, newNote]})
  // }


console.log(addAppointment)


  const router = createBrowserRouter(createRoutesFromElements(
    
    <Route path="/" element={ <Root/> }>
      
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage className='container' contacts={contacts} addContact={addContact} /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage className='container' appointments={appointments}  addAppointment={addAppointment}  contacts={contacts} /> /* Add props to AppointmentsPage */ }/>

    </Route>
  ));
  
  return (
    
    <RouterProvider router={router}/>
  );
}

export default App;
