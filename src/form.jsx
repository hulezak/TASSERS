import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    country: '',
    grade: '',
    bestBook: '',
    bestMusic: '',
    pets: '',
    siblings: '',
    bestMusician: '',
    favoriteColor: '',
    birthDate: ''
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('https://tass-backend-3.onrender.com/submit', formData);
      const id = response.data.id;
      setLoading(false);
      navigate(`/data/${id}`);
    } catch (error) {
      console.error('Error submitting form data:', error);
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
      }
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Information Form</h2>
      <form onSubmit={handleSubmit} className='form-container'>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label><br /><br />

        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </label><br /><br />

        <label>
          Country:
          <input type="text" name="country" value={formData.country} onChange={handleChange} required />
        </label><br /><br />

        <label>
          Grade:
          <input type="text" name="grade" value={formData.grade} onChange={handleChange} required />
        </label><br /><br />

        <label>
          Best Book:
          <input type="text" name="bestBook" value={formData.bestBook} onChange={handleChange} required />
        </label><br /><br />

        <label>
          Best Music:
          <input type="text" name="bestMusic" value={formData.bestMusic} onChange={handleChange} required />
        </label><br /><br />

        <label>
          Pets:
          <input type="text" name="pets" value={formData.pets} onChange={handleChange} required />
        </label><br /><br />

        <label>
          Number of Siblings:
          <input type="number" name="siblings" value={formData.siblings} onChange={handleChange} required />
        </label><br /><br />

        <label>
          Best Musician:
          <input type="text" name="bestMusician" value={formData.bestMusician} onChange={handleChange} required />
        </label><br /><br />

        <label>
          Favorite Color:
          <input type="text" name="favoriteColor" value={formData.favoriteColor} onChange={handleChange} required />
        </label><br /><br />

        <label>
          Birth Date:
          <input type="text" name="birthDate" placeholder="MM-DD" value={formData.birthDate} onChange={handleChange} required />
        </label><br /><br />
        <button type="submit" disabled={loading}>
          {loading ? <div className="spinner">....</div> : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default FormPage;
