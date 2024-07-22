// src/TeamPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './TeamPage.css'; // Import the CSS file

const TeamPage = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/allteam');
        setTeamData(response.data);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeamData();
  }, []);

  return (
    <div className="table-container">
      <h1 className="table-heading">Team Members</h1>
      <table className="data-table">
        <thead>
          <tr>
        
            <th>Name</th>
            <th>City</th>
            <th>Country</th>
            <th>Grade</th>
            <th>B.Book</th>
            <th>B.Music</th>
            <th>Pets</th>
            <th>Siblings</th>
            <th>B.Musician</th>
            <th>F.Color</th>
            <th>Birth Date</th>
          </tr>
        </thead>
        <tbody>
          {teamData.map((member) => (
            <tr key={member.id}>
        
              <td>{member.name}</td>
              <td>{member.city}</td>
              <td>{member.country}</td>
              <td>{member.grade}</td>
              <td>{member.bestBook}</td>
              <td>{member.bestMusic}</td>
              <td>{member.pets}</td>
              <td>{member.siblings}</td>
              <td>{member.bestMusician}</td>
              <td>{member.favoriteColor}</td>
              <td>{member.birthDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamPage;
