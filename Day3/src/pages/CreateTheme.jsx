
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateTheme() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');
  const themeData = { title, subtitle,description , image , price };
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend or display it
    //console.log('Submitted Data:', { title, subtitle, description, image, price });
    if(title.length === 0 || subtitle.length === 0 || description.length === 0 || image.length === 0 || price.length === 0) {
      alert("Enter all the fields");
    } else {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
        const config = {
          headers: {
            Authorization: `Bearer ${token}`, // Corrected the template literal syntax
          },
        };
        await axios.post('http://localhost:8080/api/themes/create', themeData, config);
        navigate('/service');
      } catch (error) {
        console.error('Error posting theme:', error);
      }
    
    } 
    };
  

    return (
        <div>
            <div className="navigation">
            <ul>
          <li>
            <a href="/">
              <span className="icon">
                <ion-icon name="logo-apple"></ion-icon>
              </span>
              <span className="title3">EventEuphoria.</span>
            </a>
          </li>
          <li>
            <a href="/admin">
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="title3">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/Edittheme">
              <span className="icon">
                <ion-icon name="people-outline"></ion-icon>
              </span>
              <span className="title3">Edit Themes</span>
            </a>
          </li>
          <li>
                    <a href="/createtheme">
                        <span className="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span className="title3">Create Themes</span>
                    </a>
                </li>
          <li>
            <a href="/userinfo">
              <span className="icon">
                <ion-icon name="people-outline"></ion-icon>
              </span>
              <span className="title3">User Info</span>
            </a>
          </li>
        </ul>
            </div>
            <div className='bodyjform'>
                <div className="job-form-container">
                    <center><h2>Create a New Theme</h2></center><br/>
                    <form className="job-form" onSubmit={handleSubmit}>
                        <label htmlFor="image" className='jflabel'>Upload Image:</label><br/>
                        <input
                        type="text"
                        id="image"
                        name="image"
                        onChange={(e) => setImage(e.target.value)} required
                      />
                        <br/><br/><label htmlFor="title" className='jflabel'>Theme Title:</label><br/>
                        <input className='injob'
                            type="text"
                            id="title"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} required

                        />

                        <label htmlFor="subtitle" className='jflabel'>Theme Subtitle:</label><br/>
                        <input className='injob'
                            type="text"
                            id="subtitle"
                            name="subtitle"
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.target.value)} required

                        />

                        <label htmlFor="description" className='jflabel'>Theme Description:</label><br/>
                        <textarea  
                            className="desc"
                            id="description"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)} required

                        />

                        <label htmlFor="price" className='jflabel'>Price:</label><br/>
                        <input className='injob'
                            type="text"
                            id="price"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} required

                        />

                        
                        <center><button className="post-job-button" type="submit">Create</button></center>
                    </form>
                </div>
            </div>
        </div>
    );
}
