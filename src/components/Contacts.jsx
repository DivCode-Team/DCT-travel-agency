import React from 'react';

import './Contacts.css';

export default props => {
  return (
    <div id="contacts" className="contact">
      <div className="form">
        <form action="/">
          <div className="item">
            <div>Name:</div>
            <input type="text" name="name" />
          </div>

          <div className="item">
            <div>Email:</div>
            <input type="url" name="email" />
          </div>

          <div className="item">
            <div>Phone:</div>
            <input type="text" name="phone" />
          </div>

          <div className="item">
            <div>Message:</div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>

          <button>Send</button>
        </form>
      </div>
    </div>
  );
}