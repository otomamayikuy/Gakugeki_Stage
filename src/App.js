import Header from "./components/Header"
import CalendarData from "./components/CalenderData";
import './App.css';
import { initializeApp } from "firebase/app";
import React, { useState } from 'react';

function App() {
  const firebaseConfig = {
    storageBucket: '',
    projectId: "gakugeki-stage"
  };
  const app = initializeApp(firebaseConfig);
  const [stageSelect, setStageSelect] = useState(false)
  function setTrue() {
    setStageSelect(true)
  }
  function setFalse() {
    setStageSelect(false)
  }
  return (
    <>
    {stageSelect && <div className="back" onClick={() => setStageSelect(false)}></div>}
    <Header></Header>
    <CalendarData app={app} stageSelect={stageSelect} function1={setTrue} function2={setFalse}/>
    </>
  );
}

export default App;
