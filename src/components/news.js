import React, { Component } from 'react'
import NewsItem from './newsItem'
export class news extends Component {
  render() {
    return (
      <div className="container my-4">
        <h2>NewsMonkey - Top Headlines.</h2>
        <div className="row my-3">
          <div className="col-md-3 my-3">
            <NewsItem title="myTitle" description="mydesc" imageUrl="https://media.cnn.com/api/v1/images/stellar/prod/230515140234-01-gerry-connolly-file.jpg?c=16x9&q=w_800,c_fill"/>
          </div>
          <div className="col-md-3 my-3">
            <NewsItem title="myTitle" description="mydesc"/>
          </div>
          <div className="col-md-3 my-3">
            <NewsItem title="myTitle" description="mydesc"/>
          </div>

        </div>
      
      </div>
    )
  }
}

export default news
