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
  enter: { opacity: 1, staggerChildren: 50 },
  exit: { opacity: 0, staggerChildren: 50, staggerDirection: -1 }
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
      <Container key={'container'} className="container row" style={styles.container}>

        {/* <PoseGroup> */}
          {this.props.articles &&
            this.props.articles.map((article, i) => {
              return <NewsPage key={i} article={article} />
            })}
        {/* </PoseGroup> */}

      </Container>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    margin: 'auto auto',
  }
}

export default NewsPageCards;
