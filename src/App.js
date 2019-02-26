import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// components
import Navigator from './components/elements/Navigator';
import NewsPageCards from './components/elements/NewsPageCards';
import SearchField from './components/elements/SearchBar';

// get the newsapi 
const NewsAPI = require('newsapi');
const YOUR_API_KEY = 'c78288d021a544c69abec55a4ce257cd';
const newsapi = new NewsAPI(YOUR_API_KEY);

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.getNews = this.getNews.bind(this);
    this.state = {
      articles: [],
      searchKey: 'news',
      searchCategory: '',
      searchCountry: '',
    }
  }

  componentDidMount() {
    this.getNews(this.state.searchKey, this.state.searchCategory, this.searchCountry);
  }

  getNews(q, category, country) {

    // start with defaults
    const seachParams = {
      language: 'en',
      sortBy: 'relevancy'
    };

    // get rid of the ones that don't exist by only adding the ones that do
    if (!!q) { seachParams.q = q }
    if (!!category) { seachParams.category = category }
    if (!!country) { seachParams.country = country }

    // To query top headlines
    // All options passed to topHeadlines are optional, but you need to include at least one of them
    newsapi.v2.topHeadlines(seachParams).then(response => {
      console.log(`Fetching news with args:`)
      console.log(q, category, country);

      console.log(`total articles: ${response.totalResults}`);
      this.setState({
        articles: response.articles
      })

      /*
        {
          status: "ok",
          articles: [...]
        }
      */
    });
  }

  handleClick(category) {
    this.setState({
      category
    })
  }

  render() {
    return (
      <div className="App">
        <div className="">

          <SearchField />
          <Navigator onClick={() => this.handleClick} />

          {this.state.articles ?
            <NewsPageCards 
              articles={this.state.articles}
            />
            : null} 


        </div>
      </div>
    );
  }
}

export default App;
