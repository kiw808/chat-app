import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

function Contact(props) {
    return (
        <div className="Contact">
            <img src={props.avatar} className="avatar" alt={props.name} />
            <div>
                <h4 className="name">{props.name}</h4>
                <div className="status">
                    <span className={props.online ? 'status-online' : 'status-offline'} ></span>
                    <p className="status-text">{props.online ? 'Online' : 'Offline'}</p>
                </div>
            </div>
        </div>
    );
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool
}

export default Contact;