import React, { useEffect, useState } from 'react';
import '../assets/css/Services.css';
import ElevateAppBar from './NavBar';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Services() {
  const [themes, setThemes] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchThemes = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const response = await axios.get("http://localhost:8080/api/themes/all", config);
      console.log(response);
      setThemes(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching themes:", error);
      // Handle the 403 error or any other errors here
      // For example, you can set an error state to display a message to the user
    }
  };
  
  fetchThemes();
  
}, []);

  return (
    <div className="body2">
      <ElevateAppBar />
      <div className="container2">
      {loading ? (
      <p>Loading themes...</p>
    ) : (
      themes.map((theme, index) => (
        <div className="product-card" key={index}>
          <img src={theme.image} alt="" />
          <div className="product-text">
          <h3>{theme.title}</h3>
          <p><b>{theme.subtitle}</b></p>
          <p>{theme.description}</p>
          <p>
           <b>Price: </b>Rs.{theme.price}
          </p>
          </div>
          <br />
          <br />
          <br />
        </div>
      ))
    )}
      </div>
    </div>
  );
}

