import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ( { contacts, addContact } ) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */



  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')


  const [isDuplicate, setIsDuplicate] = useState(false);
  
  // const handleContactChange = (event) => {
  //   const { name, value } = event.target;
  //   setContactInfo((prevContactInfo) => ({
  //     ...prevContactInfo,
  //     [name]: value,
  //   }));
  // };



  // useEffect(() => {
  //   const isDuplicateName = contacts.some((contact) => contact.name === contactInfo.name);
  //   setIsDuplicate(isDuplicateName);
  // }, [contactInfo.name, contacts]);
  
  // console.log()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isDuplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
      
      } 

        
    };

    
  useEffect(() => {
    const isDuplicateName = () => {
  //   contacts.some((contact) => contact.name === contactInfo.name);
  //   setIsDuplicate(isDuplicateName);
  // }, [contactInfo.name, contacts]);

      const found = contacts.find((contact) => contact.name === name);
      if (found !== undefined) {
        return true;
      }
      return false
    };

    if (isDuplicateName()) {
      setIsDuplicate(true);
      
    } else {
      setIsDuplicate(false);
    }
  }, [name, contacts, isDuplicate]);
    
    

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div className="container">
      <section>
        <h2>Add Contact</h2> 
        {isDuplicate ? " - Name Already Exists" : ""}
        <ContactForm 
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          handleSubmit={handleSubmit}
        />

      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
