import React from 'react'
import pizza from '../assets/pineapplepizza.jpg'
import '../styles/Contact.css';

function Contact() {
  return ( 
    <div className='Contact'>
        <div 
            className='leftSide' 
            style={{backgroundImage : `url(${pizza})`}}
        >

        </div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id="contact-form" method="post">
                <label htmlFor='name'>Full Name</label>
                <input name="name" placeholder='"Enter full name...' type="text"/>

                <label htmlFor='email'>Email</label>
                <input name="email" placeholder='"Enter the email...' type="email"/>

                <label htmlFor='number'>Phone number:</label>
                <input name="number" placeholder='"Enter Phone Number...' type="numbers"/>
                <label htmlFor='message'>Message</label>
                <textarea 
                  rows='6'
                  placeholder='Enter Message' 
                  name='message'
                  required
                  >

                  </textarea>

                  <button type='submit'>Send</button>
                
            </form>
        </div>
    </div>
  );
}

export default Contact ;