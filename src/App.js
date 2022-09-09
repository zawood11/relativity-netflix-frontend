import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shows from './Shows';
import ShowCard from './ShowCard';
import CreateShow from './CreateShow';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
              <Route path="http://localhost:3001/shows/new" element={<CreateShow />}/>
              <Route path="/shows/:id" element={<ShowCard />}/>
              <Route path="http://localhost:3001/shows/" element={<Shows />}/>
              <Route path="/" element={<Shows />}/>
            </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
