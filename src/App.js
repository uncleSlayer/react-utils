import './App.css';
import { useState } from 'react'
import TheNav from './components/Nav';
import TextIn from './components/TextIn';
import About from './components/About';
import Alert from './components/Alert';
import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light')
  const [message, setMessage] = useState(null)

  const changeMod = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      changeMessage('Dark mode activated')
      document.title = 'text utils | dark'
      setTimeout(() => {
        changeMessage(null)
      }, 1000);
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      changeMessage('Light mode activated')
      document.title = 'text utils | light'
      setTimeout(() => {
        changeMessage(null)
      }, 1000);
    }
  }

  const changeMessage = (message) => {
    setMessage(message)
  }



  return (
    <>
      <TheNav mode={mode} change={changeMod} />
      <Alert alertMessage={message} />
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/text' element={<TextIn heading='write a comment' mode={mode}/>}/>
      </Routes>
    </>
  );
}

export default App;
