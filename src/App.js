import './App.css';

import React, { Component } from 'react'
import Navbar from './components/navbar';
import News from './components/news';
// import NewsItem from './components/newsItem';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

export default class App extends Component {
  
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="general" pagesize={4} country="us" category="general"/>} />
          <Route exact path="/entertainment" element={<News key="entertainment" pagesize={4} country="us" category="entertainment"/>} />
          <Route exact path="/sports" element={<News key="sports" pagesize={4} country="us" category="sports"/>} />
          <Route exact path="/business" element={<News key="business" pagesize={4} country="us" category="business"/>} />
          <Route exact path="/general" element={<News key="general" pagesize={4} country="us" category="general"/>} />
          <Route exact path="/health" element={<News key="health" pagesize={4} country="us" category="health"/>} />
          <Route exact path="/science" element={<News key="science" pagesize={4} country="us" category="science"/>} />
          <Route exact path="/technology" element={<News key="technology" pagesize={4} country="us" category="technology"/>} />
        

        </Routes>
        
      </div>
      </Router>
    )
  }
}

