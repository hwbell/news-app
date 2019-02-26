import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

// components
import NewsPage from './NewsPage';

class NewsPageCards extends Component {

  constructor(props) {
    super(props);

    this.state = {
      //

    }
  }
  render() {
    return (
      <div className="container row" style={styles.container}>
        
        {this.props.articles.map ( (article, i) => {
          return <NewsPage key={i} article={article}/>
        })}
      </div>
    );
  }
}

const styles = {
  container: {
    width: '90%',
    margin: 'auto auto',
  }
}

export default NewsPageCards;
