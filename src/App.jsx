import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Nav from './componants/Nav';
import AllPost from './componants/AllPost';

function App() {
  return (
    <>
      <Nav/>
      <AllPost/>
    </>
  )
}

export default App
