import './App.css';

import React, { Component } from 'react'
import Navbar from './components/navbar';
import News from './components/news';
// import NewsItem from './components/newsItem';
import LoadingBar from 'react-top-loading-bar';


import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

export default class App extends Component {
  
  state = {
    progress: 0
  }
  setProgress=(progress)=>{
    this.setState({
      progress: progress
    })
  }


  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pagesize={4} country="us" category="general"/>} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pagesize={4} country="us" category="entertainment"/>} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pagesize={4} country="us" category="sports"/>} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pagesize={4} country="us" category="business"/>} />
          <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pagesize={4} country="us" category="general"/>} />
          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pagesize={4} country="us" category="health"/>} />
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pagesize={4} country="us" category="science"/>} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pagesize={4} country="us" category="technology"/>} />
        

        </Routes>
        
      </div>
      </Router>
    )
  }
}

