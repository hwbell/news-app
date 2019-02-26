import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// components
import Navigator from './components/elements/Navigator';
import NewsPageCards from './components/elements/NewsPageCards';
import SearchBar from './components/elements/SearchBar';
import { Spinner } from 'reactstrap';

// get the newsapi 
const NewsAPI = require('newsapi');
const YOUR_API_KEY = 'c78288d021a544c69abec55a4ce257cd';
const newsapi = new NewsAPI(YOUR_API_KEY);

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.getNews = this.getNews.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      articles: [],
      searchKey: 'news',
    }
  }

  componentDidMount() {
    this.getNews(this.state.searchKey);
  }

  getNews(q) {

    // start with defaults
    const seachParams = {
      language: 'en',
      sortBy: 'relevancy'
    };

    // get rid of the ones that don't exist by only adding the ones that do
    if (!!q) { seachParams.q = q }


    // To query /v2/everything
    // You must include at least one q, source, or domain
    newsapi.v2.everything(seachParams).then(response => {
      console.log(`Fetching news with args:`)
      console.log(q);

      console.log(`total articles: ${response.totalResults}`);

      
      this.setState({
        articles: response.articles.slice(0, 10)
      })

      /*
        {
          status: "ok",
          articles: [...]
        }
      */
    });
  }

  // for SearchBar handling
  handleSearch(value) {
    // event.preventDefault();
    console.log(`searching for new articles with keyword ${value}`)
    this.setState({
      articles: [],
      searchKey: value
    }, () => {
      this.getNews(this.state.searchKey)
    })
  }

  // for Navigator handling
  handleClick(category) {
    this.setState({
      articles: [],
      searchKey: category
    }, () => {
      this.getNews(this.state.searchKey)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="">

          <SearchBar handleSearch={this.handleSearch} />
          <Navigator onClick={this.handleClick} />
         
          {this.state.articles &&
            <NewsPageCards
              articles={this.state.articles}
            />
          }


        </div>
      </div>
    );
  }
}

const styles = {
  loadingText: {
    color: 'black'
  }
}

export default App;
