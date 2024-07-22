import React, { useEffect, useState } from 'react';
// import './StudentPage.css'; // Import CSS for styling

const StudentPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student data from the API
    const fetchStudents = async () => {
      try {
        const response = await fetch('https://tass-backend-3.onrender.com/allteam');
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="container">
      <h1 className="page-title">Summer Program Students</h1>
      <div className="student-container">
        {students.map(student => (
          <div className="student-card" key={student.id}>
            <div className='image_header'>
            <h3 className="student-name">{student.name}</h3>

                  <div className="image-placeholder">
              {/* Placeholder for image */} 
            </div> </div>
            

            <div className="student-info">
              
              <p className="student-school">{student.school}</p>
              <table className="info-table">
                <tbody>
                  <tr>
                    <th>Grade:</th>
                    <td>{student.grade}</td>
                  </tr>
                  <tr>
                    <th>Best Book:</th>
                    <td>{student.bestBook}</td>
                  </tr>
                  <tr>
                    <th>Best Music:</th>
                    <td>{student.bestMusic}</td>
                  </tr>
                  <tr>
                    <th>Pets:</th>
                    <td>{student.pets}</td>
                  </tr>
                  <tr>
                    <th>Number of Siblings:</th>
                    <td>{student.siblings}</td>
                  </tr>
                  <tr>
                    <th>Best Musician:</th>
                    <td>{student.bestMusician}</td>
                  </tr>
                  <tr>
                    <th>Favorite Color:</th>
                    <td>{student.favoriteColor}</td>
                  </tr>
                  <tr>
                    <th>Birth Date:</th>
                    <td>{student.birthDate}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentPage;
