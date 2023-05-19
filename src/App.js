import './App.css';

import React, { Component } from 'react'
import Navbar from './components/navbar';
import News from './components/news';
// import NewsItem from './components/newsItem';
export default class App extends Component {
  
  render() {
    return (
      <div>
        <Navbar/>
        <News />
        
      </div>
    )
  }
}

