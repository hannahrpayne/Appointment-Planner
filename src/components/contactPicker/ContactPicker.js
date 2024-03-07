import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <>
      <select onChange={onChange} value={value} name={name} >
        <option value="" default >No Contact Selected</option>
        <option></option>

        {contacts.map((contact) => {
       return <option 
          key={contact.id} 
          value={contact.name}
          name={name}  
          >{contact.name}</option>
      })}
      </select>
    </>
  );
};
