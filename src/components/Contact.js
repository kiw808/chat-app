import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="Contact">
            <img src="https://randomuser.me/api/portraits/women/90.jpg" className="avatar"/>
            <div>
                <h4 className="name">Lauren Hudson</h4>
                <div className="status">
                    <span className="status-online"></span>
                    <p className="status-text">Online</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;