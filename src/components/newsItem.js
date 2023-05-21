import React, { Component } from 'react'

export class newsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, author , source} = this.props;
    return (
      <div>
        <div className="card">
           {/* badge */}
            <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1", left:"80%"}}>
              {source}
              {/* the property z-index will allow the badge to display its content above the next card element and left property will allow the badge to shift to left to certain given percentage. */}

              <span class="visually-hidden">unread messages</span>
            </span>
          
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author ? author : "unknown"} , on {date ? new Date(date).toGMTString() : "unknown date"}</small></p>
            {/* we have added dates and names of the author to the ends of the cards, and for the date to be displayed in 
            GMT format, we use toGMTString method.  */}
            <a target="-blank" href={newsUrl} className="btn btn-sm  btn-dark">Read More</a>

          </div>
        </div>

      </div>
    )
  }
}

export default newsItem
