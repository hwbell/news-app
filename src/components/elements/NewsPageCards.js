import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';


// components
import NewsPage from './NewsPage';
import MoreArticles from './MoreArticles';

// animation
import posed, { PoseGroup } from 'react-pose';

// for the outer container of all the cards. this way the children stagger
const Container = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 50, staggerDirection: -1 }
});

class NewsPageCards extends Component {

  constructor(props) {
    super(props);

    this.state = {
      //

    }
  }
  render() {
    console.log(this.props.articles)
    return (
      <PoseGroup>
        <Container key={'container'} className="container row" style={styles.container}>
            {this.props.articles.map((article, i) => {
              return <NewsPage key={i} article={article} />
            })}
            
            {this.props.showButton && 
            <MoreArticles 
              handleClick={this.props.handleMoreArticles}
            />}

        </Container>
      </PoseGroup>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    margin: 'auto auto',
  }
}

export default NewsPageCards;
