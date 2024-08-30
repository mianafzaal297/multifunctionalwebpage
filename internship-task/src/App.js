// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Task1 from './Components/Task1';
import Task2 from './Components/Task2';
import Task3 from './Components/Task3';
import Task4 from './Components/Task4';
import styles from './App.module.css';

const App = () => {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/task1" element={<Task1 />} />
            <Route path="/task2" element={<Task2 />} />
            <Route path="/task3" element={<Task3 />} />
            <Route path="/task4" element={<Task4 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
