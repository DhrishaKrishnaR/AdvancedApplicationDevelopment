import React, { useState } from 'react';
import '../assets/css/Book.css'
import { Link, useNavigate } from 'react-router-dom';

export default function Book() {
    const navigate=useNavigate();

    const [bookingData, setBookingData] = useState({
        name: '',
        age: '',
        phone: '',
        date: '',
        address: '',
        message: '',
    });
    const [error, setError] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingData({
            ...bookingData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            bookingData.name === '' ||
            bookingData.age === '' ||
            bookingData.phone === '' ||
            bookingData.date === '' ||
            bookingData.address === '' ||
            bookingData.message === ''
        ) {
            setError(true);
        } else {
            setError(false);
            document.getElementById("home_link").click();
        }
    };
       

    return (
        <div className='bodyjform'>
            <div className="job-form-container">
                <center><h2>Book a Birthday Event</h2></center>
                <form className="job-form" onSubmit={handleSubmit}>
                    <label htmlFor="name" className='jflabel'>Your Name:</label><br/>
                    <input className='injob'
                        type="text"
                        id="name"
                        name="name"
                        value={bookingData.name}
                        onChange={handleInputChange}
                    />
                    {error && bookingData.name.length === 0 && <label style={{ color: 'red' }}>Name is required</label>}
                    
                    <label htmlFor="age" className='jflabel'>Your Age:</label><br/>
                    <input className='injob'
                        type="number"
                        id="age"
                        name="age"
                        value={bookingData.age}
                        onChange={handleInputChange}
                    />
                    {error && bookingData.age.length === 0 && <label style={{ color: 'red' }}>Age is required</label>}
                    
                    <label htmlFor="phone" className='jflabel'>Phone Number:</label><br/>
                    <input className='injob'
                        type="text"
                        id="phone"
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleInputChange}
                    />
                    {error && bookingData.phone.length === 0 && <label style={{ color: 'red' }}>Phone number is required</label>}
                    
                    <label htmlFor="date" className='jflabel'>Event Date:</label><br/>
                    <input className='injob'
                        type="date"
                        id="date"
                        name="date"
                        value={bookingData.date}
                        onChange={handleInputChange}
                    />
                    {error && bookingData.date.length === 0 && <label style={{ color: 'red' }}>Date is required</label>}
                    
                    <label htmlFor="address" className='jflabel'>Address:</label><br/>
                    <input className='injob'
                        type="text"
                        id="address"
                        name="address"
                        placeholder='Enter your entire address'
                        value={bookingData.address}
                        onChange={handleInputChange}
                    />
                    {error && bookingData.address.length === 0 && <label style={{ color: 'red' }}>Address is required</label>}
                    
                    <label htmlFor="message" className='jflabel'>Add ons:</label><br/>
                    <textarea  
                        className="desc"
                        name="message"
                        value={bookingData.message}
                        onChange={handleInputChange}
                    />
                    {error && bookingData.message.length === 0 && <label style={{ color: 'red' }}>Message is required</label>}
                    
                    <center><Link to="/payment" className="post-job-button" type="submit">Book Event</Link></center>
                </form>
            </div>
        </div>
    );
}
