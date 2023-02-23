import React, { useEffect, useState } from 'react'
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';

export const Contact = () => {

    const [users, setUsers] = useState([]);
    const userCollectionRef = collection(db, "contact");
    const [newEmail, setNewEmail] = useState("");
    const [fieldEmailError, setFieldEmailError] = useState("");
    const [newSubject, setNewSubject] = useState("");
    const [newMessage, setNewMessage] = useState(0);

    const submitForm = async () => {
        const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(newEmail)){
            setFieldEmailError("fieldError");
        }
        else {
            setFieldEmailError("");
        }
     
        await addDoc(userCollectionRef, {
          email: newEmail,
          subject: newSubject,
          message: newMessage,
        });
      };

      const fieldErrorMsg = () =>{
            return (
                <span className='fieldTxtError'>Please enter correct email</span>
            )
      }

  return (
    <>
        <div className="card">
            <div className="card-block">
              <h2>Contact</h2>
                <div className="form-group">
                  <input type="email" onChange={(e) => setNewEmail(e.target.value)} className={`form-control-custom ${fieldEmailError}`} id="email" placeholder="Email" />
               
                {
                    (fieldEmailError == "") ? '' : 
                    <span className='fieldTxtError'>Please enter correct email</span>
                }
                {
                    (newEmail != "") ? '':
                    <span className='fieldTxtError'>Please enter email</span>
                }
           
                </div>
                <div className="form-group">
                  <input type="text" onChange={(e) => setNewSubject(e.target.value)} className="form-control-custom" id="subject" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea className="form-control-custom" onChange={(e) => setNewMessage(e.target.value)} rows="5" placeholder="Enter your message"></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" onClick={submitForm} className=" btn-custom btn-primary-custom">Send message</button>
                </div>
            </div>
          </div>
    </>
    
  )
}
