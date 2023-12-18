import React from 'react'
import "./App.css"
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoDownloader from './components/VideoDownloader';

const App = () => {
  return (
    <div className='main'>
      <Header/>
      <VideoDownloader/>

    </div>
  )
}

export default App
