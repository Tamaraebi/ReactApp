import { useState, useEffect } from "react";
export default function Contact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContact = async () => {
      let response = await fetch(
        "http://laravel.tamaraebi.ca/api/contacts"
      );
      let data = await response.json();
      //   console.log(data);
      setContacts(data);
    };
    getContact();
  }, []);

  return (
    <div>
      <h1 id="contact_head">Contact me:</h1>
      <div id="contact_field">
        <p>Tamara Ebiukuli</p>
        <p>Email Address: tamaraebiukuli@gmail.com</p>
        <p>Phone Number: 613-501-7278</p>
        <p>Location: Toronto, Ontario</p>
      </div>
      <div id="contact_so">
        {contacts.map((contact) => (
          <div key={contact.id}>
            <a href={contact.url}>
              <h4>{contact.title}</h4>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}