import React from 'react';
import html2canvas from 'html2canvas';
import myImage from './uni.jpg';
import './style.css';

const Card = ({ university }) => {
  const downloadJPEG = async () => {
    const element = document.getElementById(university.name);
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.download = `${university.name}.jpeg`;
    link.click();
   
  };

  return (
    <div id={university.name} className="university-card">
      <img src={myImage}></img>
      <h3>{university.name}</h3>
      <p><a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer">Visit Website</a></p>
      <button onClick={downloadJPEG}>Download</button>
    </div>
  );
};

export default Card;
