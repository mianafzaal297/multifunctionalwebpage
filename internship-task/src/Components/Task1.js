// Task1.js
import React, { useState } from 'react';
import styles from './Task1.module.css';

const Task1 = () => {
  const images = [
    '/images/img1.jpeg',
    '/images/img2.jpeg',
    '/images/img3.jpeg',
    '/images/img4.jpeg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.galleryContainer}>
      <h2 className={styles.galleryTitle}>Image Gallery</h2>
      <div className={styles.navigationButtons}>
        <button onClick={handlePrevious} className={`${styles.button} ${styles.prevButton}`}>❮</button>
        
        <button onClick={handleNext} className={`${styles.button} ${styles.nextButton}`}>❯</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={images[currentIndex]} alt={`Gallery Image ${currentIndex + 1}`} className={styles.image} />
      </div>
    </div>
  );
};

export default Task1;
