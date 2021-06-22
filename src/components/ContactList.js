import React from 'react';
import Contact from './Contact';

const contacts = [
    {
        name: "Diana Lane",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        online: true
    },
    {
        name: "Lester Stanley",
        avatar: "https://randomuser.me/api/portraits/men/95.jpg",
        online: false
    },
    {
        name: "Marian Silva",
        avatar: "https://randomuser.me/api/portraits/women/14.jpg",
        online: true
    }
];

function ContactList() {
    return (
        contacts.map(contact => (
            <Contact name={contact.name} avatar={contact.avatar} online={contact.online} key={contact.name} />
        ))
    );
}

export default ContactList;