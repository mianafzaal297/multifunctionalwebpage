// Task4.js
import React, { useState, useRef, useEffect } from 'react';
import styles from './Task4.module.css';

const Task4 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(new Audio());

  const songs = [
    { id: 1, name: 'Song 1', url: '/songs/song1.mp3' },
    { id: 2, name: 'Song 2', url: '/songs/song2.mp3' },
    { id: 3, name: 'Song 3', url: '/songs/song3.mp3' },
  ];

  const handlePlayPause = (song) => {
    if (currentSong?.id === song.id) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const newAudio = new Audio(song.url);
      audioRef.current = newAudio;
      audioRef.current.play();
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  // Cleanup function to stop audio when component is unmounted
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div className={styles.musicPlayerContainer}>
      <h2 className={styles.title}>Music Player</h2>
      <ul className={styles.songList}>
        {songs.map((song) => (
          <li key={song.id}>
            <button onClick={() => handlePlayPause(song)} className={styles.button}>
              {isPlaying && currentSong?.id === song.id ? 'Pause' : 'Play'} {song.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task4;
