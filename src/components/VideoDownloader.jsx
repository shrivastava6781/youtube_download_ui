import React, { useState } from 'react';
import axios from 'axios';
import './VideoDownloader.css';
import { Oval } from 'react-loader-spinner';

const VideoDownloader = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const response = await axios.get(`http://localhost:3001/download?url=${videoUrl}`, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement('a');
      a.href = url;
      a.download = 'video.mp4';
      document.body.appendChild(a);
      a.click();
      setDownloaded(true);
    } catch (error) {
      console.error('Error downloading video:', error);
      setDownloaded(false);
    } finally {
      setDownloading(false);
    }
  };

  const handleInputChange = (e) => {
    // Reset downloaded state when input changes
    setDownloaded(false);
    setVideoUrl(e.target.value);
  };

  return (
    <div className='main-container'>
      <div className='box'>
        <input
          className='text-container'
          type="text"
          placeholder="Enter YouTube video URL"
          value={videoUrl}
          onChange={handleInputChange} // Updated the onChange handler
        />
        <button className='button' onClick={handleDownload}>
          Download Video
        </button>
      </div>

      {downloading && (
        <div className='loader-container' style={{ margin: '1vw' }}>
          <Oval color="#00BFFF" height={50} width={50} />
        </div>
      )}
      {downloaded && (
        <div className='heading'>
          <img
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/confetti.png"
            alt="confetti"
          />
          <p>Your video is Downloaded</p>
        </div>
      )}
    </div>
  );
};

export default VideoDownloader;
