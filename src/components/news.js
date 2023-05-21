import React, { Component } from 'react'
import NewsItem from './newsItem'
import { Spinner } from './Spinner';
import PropTypes from 'prop-types'


export class news extends Component {
  static defaultProps={
    country: "us",
    category: "general",
    pagesize: 4
  }
  static propTypes ={
    country: PropTypes.string,
    category: PropTypes.string,
    pagesize: PropTypes.number,
    author: PropTypes.string
  }
  
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
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8aa69dd64d4e4cc780b05d76315db500&page=1&pagesize=${this.props.pagesize}`;
    //pagesize property allows you to handle the number of articles you want to show in a page
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      //total results is the total number of articels in the page.
      totalResults: parsedData.totalResults,
      loading: false
    })

  }
  handlePrevClick= async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8aa69dd64d4e4cc780b05d76315db500&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;

    this.setState({loading: true})
    // while the page is loading, it will show a spinner gif otherwise not

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      // when we click the previous button page number will decrease to 1 so that when it reaches page 1, it gets disabled
      page: this.state.page - 1,
      loading: false //after the page have been loaded successfully, we set loading to true and gif will disappear
    })
  }
  handleNextClick=async()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8aa69dd64d4e4cc780b05d76315db500&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page+1,
        article: parsedData.articles,
        loading: false,
        
      })
    }
    

  render() {
    return (
      <div className="container my-4">
        <h2 className = "text-center">NewsMonkey - Top Headlines.</h2>

        {this.state.loading &&<Spinner/>} 
        {/* this code will run only if both the conditions are true. */}
        
        <div className="row my-4">
        {this.state.article.map((element)=>{
          return <div className="col-md-3 my-3" key={element.url}>
          <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage?element.urlToImage:"https://i.ytimg.com/vi/FMYu5ZSSAbE/hqdefault.jpg"} newsUrl={element.url} date ={element.publishedAt} author={element.author} source={element.source.name}/>
        </div>
        })}
        
        <div className="d-flex justify-content-between">
          
              <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous </button>

              {/* disabled property will temperorily disable the button when the condition is true. */}
              <button disabled={(this.state.page+1) > Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
          

        </div>
      
      </div>
    )
  }
}

export default news
