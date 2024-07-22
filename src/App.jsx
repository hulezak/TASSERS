// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './form';
import DisplayPage from './display';
import './App.css';
import Header from './header';
import TeamPage from './Team';
import StudentPage from './student';
import Home from './Home';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/data/:id" element={<DisplayPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/students" element={<StudentPage />} />
      </Routes>
    </Router>
  );
};

export default App;

