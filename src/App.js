import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { NavBar } from './Components/NavBar/NavBar';
import { Templates } from './Components/Pages/Templates/Templates';
import { SearchBar } from './Components/SearchBar/SearchBar';
import { Home } from './Components/Pages/Home/Home';
import { Groups } from "./Components/Pages/Groups/Groups";
import { Stacks } from "./Components/Pages/Stacks/Stacks";
import { Survey } from "./Components/Pages/Survey/Survey";

function App() {
  return (
    <Router>
      <div className='app-container'>
          <SearchBar/>
        <div  className="main-content">
            <NavBar/>
          <div className="content">
              <div className="container-section">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/templates" element={<Templates />}/>
                    <Route path="/grupos" element={<Groups />}/>
                    <Route path="/stacks" element={<Stacks />}/>
                    <Route path="/survey" element={<Survey />}/>
                </Routes>
              </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
