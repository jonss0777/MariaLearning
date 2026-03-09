import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; import './App.css'
import Home from './Home';
import About from './About';
import Flashcards from './Flashcards';
import Flashcard from './Flashcard';
import CreateFlashcard from './CreateFlashcard';
function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link style={{ margin: "5px", padding: "8px" }} to="/">Home</Link> |{" "}
          {/* <Link to="/contact">Contact</Link> */}
          <Link style={{ margin: "5px", padding: "8px" }} to="/flashcards">Flashcards</Link>
          {/* <Link  style={{margin: "5px", padding:"8px"}} to="/flashcard/:id/:title"></Link> */}
          <Link style={{ margin: "5px", padding: "8px" }} to="/about">About</Link> |{" "}

        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/flashcards" element={<Flashcards />}></Route>
          <Route path="/create-flashcard" element={<CreateFlashcard />}></Route>
          <Route path="/flashcard/:id/:title" element={<Flashcard></Flashcard>}></Route>
        </Routes>
      </BrowserRouter>
      <footer style={{display:"flex", alignItems:"center", flexDirection:"column", position:"relative", bottom: 0, width: "100%", padding: "10px", margin: "0px"}}>
        <p>Contach Information</p>
        <p>johndoe@marialearning.com</p>
        <p>Socials</p>
        <div style={{display:"flex", flexDirection:"row", rowGap: "30px"}}>
          <p style={{padding: "0px", margin:"0px 0px 0px 0px"}}>icon</p>
          <p style={{padding: "0px", margin:"0px 10px 0px 10px"}}>icon</p>
          <p style={{padding: "0px", margin:"0px 10px 0px 10px"}}>icon</p>
        </div>


      </footer>
    </>
  )

}

export default App
