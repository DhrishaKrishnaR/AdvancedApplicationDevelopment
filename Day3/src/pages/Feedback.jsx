import React, { useState } from 'react';
import '../assets/css/Feedback.css'
import ElevateAppBar from './NavBar';
function Feedback()  {
      const [name, setName] = useState('');
      const [returnAddress, setReturnAddress] = useState('');
      const [topic, setTopic] = useState('');
      const [subject, setSubject] = useState('');
      const [errors, setErrors] = useState({});
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Validate form
        const errors = {};
        if (!name.trim()) {
          errors.name = 'Name is required';
        }
        if (!returnAddress.trim()) {
          errors.returnAddress = 'Email address is required';
        }
        if (!topic.trim()) {
          errors.topic = 'Topic is required';
        }
        if (!subject.trim()) {
          errors.subject = 'Subject is required';
        }
        if (Object.keys(errors).length === 0) {
          // Form is valid, you can submit it or perform other actions
          console.log('Form is valid');
        } else {
          setErrors(errors);
        }
      };
    
      return (
        <div>
          <ElevateAppBar/>
        <div className='bodyfeed'>
        <form className="custom-form" onSubmit={handleSubmit}>
          <div className="custom-div">
            <img src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/mail-letter-offer-256.png" alt="icon" className="custom-img" />
          </div>
          <input type="text" placeholder="Name (required)" value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <span className="custom-error">{errors.name}</span>}
          <input type="email" placeholder="Email(required)" value={returnAddress} onChange={(e) => setReturnAddress(e.target.value)} />
          {errors.returnAddress && <span className="custom-error">{errors.returnAddress}</span>}
          <input type="text" placeholder="Topic (required)" value={topic} onChange={(e) => setTopic(e.target.value)} />
          {errors.topic && <span className="custom-error">{errors.topic}</span>}
          <textarea placeholder="Subject (required)" value={subject} onChange={(e) => setSubject(e.target.value)} className="custom-textarea"></textarea>
          {errors.subject && <span className="custom-error">{errors.subject}</span>}
          <input type="submit" value="Send" className="custom-submit" />
        </form>
        </div>
        </div>
      );
    }
    


export default Feedback;
