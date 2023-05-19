import React, { Component } from 'react'
import NewsItem from './newsItem'
export class news extends Component {
  
  constructor(){
    super();
    console.log("constructor from the news component.")
    this.state ={
      page:1,
      article: [],
      loading: false
    }
}
  async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8aa69dd64d4e4cc780b05d76315db500&page=1&pagesize=20";
    //pagesize property allows you to handle the number of articles you want to show in a page
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      //total results is the total number of articels in the page.
      totalResults: parsedData.totalResults
    })

  }
  handlePrevClick= async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8aa69dd64d4e4cc780b05d76315db500&page=${this.state.page - 1}&pagesize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      // when we click the previous button page number will decrease to 1 so that when it reaches page 1, it gets disabled
      page: this.state.page - 1
    })
    console.log(this.state.page);
  }
  handleNextClick=async()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8aa69dd64d4e4cc780b05d76315db500&page=${this.state.page+1}&pagesize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page+1,
        article: parsedData.articles
      })
    }
    

  render() {
    return (
      <div className="container my-4">
        <h2>NewsMonkey - Top Headlines.</h2>
        
        <div className="row my-3">
        {this.state.article.map((element)=>{
          return <div className="col-md-3 my-3" key={element.url}>
          <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage?element.urlToImage:"https://i.ytimg.com/vi/FMYu5ZSSAbE/hqdefault.jpg"} newsUrl={element.url}/>
        </div>
        })}
        
        <div className="d-flex justify-content-between">
          {console.log(this.state.totalResults)}
              <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous </button>

              {/* disabled property will temperorily disable the button when the condition is true. */}
              <button disabled={(this.state.page+1) > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
          

        </div>
      
      </div>
    )
  }
}

export default news
