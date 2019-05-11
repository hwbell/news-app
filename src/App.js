import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// components
import Navigator from './components/elements/Navigator';
import NewsPageCards from './components/elements/NewsPageCards';
import SearchBar from './components/elements/SearchBar';
import MoreArticles from './components/elements/MoreArticles';
import { Spinner } from 'reactstrap';

// animation
import posed, { PoseGroup } from 'react-pose';

// for the outer container of all the cards. this way the children stagger
const Container = posed.div({
  enter: { opacity: 1, staggerChildren: 50 },
  exit: { opacity: 0, staggerChildren: 50, staggerDirection: -1 }
});

// get the newsapi 
const NewsAPI = require('newsapi');
const YOUR_API_KEY = process.env.REACT_APP_NEWSAPI_KEY;
const newsapi = new NewsAPI(YOUR_API_KEY);

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.getNews = this.getNews.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMoreArticles = this.handleMoreArticles.bind(this);

    this.state = {
      articles: [],
      fullArticles: [],
      searchKey: 'news',
      sortBy: 'relevancy',
      displayLength: 10,
      showArticles: false
    }
  }

  componentDidMount() {
    this.getNews(this.state.searchKey);
  }

  getNews(q) {

    // switch this back and forth upon getting new articles, for the pose animation
    this.setState({ showArticles: false });

    // start with defaults
    const seachParams = {
      language: 'en',
      sortBy: this.state.sortBy
    };

    // get rid of the ones that don't exist by only adding the ones that do
    if (!!q) { seachParams.q = q }


    // To query /v2/everything
    // You must include at least one q, source, or domain
    newsapi.v2.everything(seachParams).then(response => {
      console.log(`Fetching news with args:`)
      console.log(q);

      console.log(`total articles: ${response.totalResults}`);
      console.log(response.articles)

      // slicing at 1 because a non-related article seems to come up first quite often?
      this.setState({
        articles: response.articles.slice(1, this.state.displayLength + 1),
        fullArticles: response.articles,
        showArticles: true
      })
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

  handleMoreArticles() {
    console.log('getting more articles to read ...')
    let fullArticles = JSON.parse(JSON.stringify(this.state.fullArticles));
    let newDisplayLength = this.state.displayLength + 10;

    // if there are 10 more to display, do it!
    if (!!fullArticles[newDisplayLength]) {
      this.setState({
        articles: fullArticles.slice(1, newDisplayLength + 1)
      })
    } else {
      // otherwise just diplay them all. This will only be available for the user
      // if fullArticles.length > 10 to begin with
      this.setState({
        articles: fullArticles
      })
    }
  }

  render() {
    // if there are more to show or not ... 
    let showButton = this.state.articles.length < this.state.fullArticles.length;
    console.log(this.state.articles.length, this.state.fullArticles.length, showButton)
    return (
      <div className="App">
        <div className="">

          <SearchBar handleSearch={this.handleSearch} />

          <Navigator onClick={this.handleClick} />

          <PoseGroup>
            {this.state.showArticles &&

              <Container key="container">
                <NewsPageCards
                  articles={this.state.articles}
                  handleMoreArticles={this.handleMoreArticles}
                />
                {showButton &&
                  <MoreArticles
                    handleClick={this.handleMoreArticles}
                  />}
              </Container> 
            }
          </PoseGroup>

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
