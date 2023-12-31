import React, { useState } from 'react';
import { ContactData } from '../ContactData.class';

export const Contact = () => {
    const [email, setEmail]=useState('')
    const [message, setMessage]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        const timestamp = Date.now()
        const newMsg=new C+ontactData(timestamp,email,message)
        console.log(newMsg)
    }

    return (
        <div className='components-container'>
            
            <h2>Contact Us!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="emailAddress">Email address</label>
                <input id='emailAddress' type="text" value={email} 
                required onChange={(e)=>setEmail(e.target.value)}/>
                <br />
                <label htmlFor="message">Your Message</label>
                <textarea id="message" cols="30" rows="10" value={message} 
                required onChange={(e)=>setMessage(e.target.value)}>
                </textarea>
                <button type='submit'>Send</button>
            </form>
        </div>
    );
};
