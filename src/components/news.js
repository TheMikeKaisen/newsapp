import React, { Component } from 'react'
import NewsItem from './newsItem'
import { Spinner } from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class news extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
    pagesize: 4
  }
  static propTypes = {

    country: PropTypes.string,
    category: PropTypes.string,
    pagesize: PropTypes.number,
    author: PropTypes.string
  }

  constructor(props) {
    super();
    console.log("constructor from the news component.")
    this.state = {
      page: 1,
      article: [],
      loading: false,
      totalResults: 0
    }
    document.title = `${props.category} - NewsMonkey`
  }
  updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8aa69dd64d4e4cc780b05d76315db500&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    //pagesize property allows you to handle the number of articles you want to show in a page
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: this.state.article.concat(parsedData.articles),      
      //this will concatinate the contents of next page under the articles as we scroll
      
      //total results is the total number of articels in the page.
      totalResults: parsedData.totalResults,
      loading: false
    })
  }
  async componentDidMount() {
    this.updateNews();

  }
  fetchMoreData = async () => {
    this.setState({page: this.state.page+1})
    this.updateNews();
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8aa69dd64d4e4cc780b05d76315db500&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    // //pagesize property allows you to handle the number of articles you want to show in a page
    // this.setState({ loading: true })
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   article: this.state.article.concat(parsedData.articles),
    //   //total results is the total number of articels in the page.
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // });
  }
  render() {
    return (
      <div className="container my-4">
        <h2 className="text-center">NewsMonkey - Top {this.props.category} Headlines.</h2>

        {/* {this.state.loading &&<Spinner/>}  */}
        {/* this code will run only if both the conditions are true. */}

        {/* Adding an infinite scroll */}
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.totalResults}
          // it will scroll untill the length of article becomes equal to the length of totalResults
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row my-4">
            {this.state.article.map((element) => {
              return <div className="col-md-3 my-3" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://i.ytimg.com/vi/FMYu5ZSSAbE/hqdefault.jpg"} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name} />
              </div>

            })}
          </div>
          </div>
        </InfiniteScroll>

        


      </div>


    )
  }
}

export default news