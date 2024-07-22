// src/DisplayPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const DisplayPage = () => {
  const { id } = useParams(); // Extract the 'id' parameter from the URL
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://tass-backend-3.onrender.com/data/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="display-container">
      <h2 className="display-heading">Submitted Information Successfully</h2>
      {formData ? (
        <div className="display-info">
          <p className="display-field"><strong>Name:</strong> {formData.name}</p>
          <p className="display-field"><strong>City:</strong> {formData.city}</p>
          <p className="display-field"><strong>Country:</strong> {formData.country}</p>
          <p className="display-field"><strong>Grade:</strong> {formData.grade}</p>
          <p className="display-field"><strong>Best Book:</strong> {formData.bestBook}</p>
          <p className="display-field"><strong>Best Music:</strong> {formData.bestMusic}</p>
          <p className="display-field"><strong>Pets:</strong> {formData.pets}</p>
          <p className="display-field"><strong>Number of Siblings:</strong> {formData.siblings}</p>
          <p className="display-field"><strong>Best Musician:</strong> {formData.bestMusician}</p>
          <p className="display-field"><strong>Favorite Color:</strong> {formData.favoriteColor}</p>
          <p className="display-field"><strong>Birth Date:</strong> {formData.birthDate}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DisplayPage;
