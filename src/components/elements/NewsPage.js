import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

// animation
import posed from 'react-pose';

// components
import { Card, CardBody, CardTitle, CardText, CardImg, CardLink } from 'reactstrap';

const Div = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 }
});


class NewsSource extends Component {

  constructor(props) {
    super(props);

    this.state = {
      //

    }
  }
  render() {

    const article = this.props.article;
    const time = new Date(article.publishedAt);
    const month = time.getMonth()+1 < 10 ? `0${time.getMonth()+1}` : time.getMonth()+1;
    const date = time.getDate()+1 < 10 ? `0${time.getDate()+1}` : time.getDate()+1;

    const dateDisplay = `posted ${month}-${date}`

    return (
      <Div className="col-12 col-md-6" style={styles.cardHolder}>
        <Card>
          <CardImg top width="100%" src={article.urlToImage} alt="Card image cap" />
          
          <CardBody>
            
            <CardTitle style={styles.title}>{article.title}</CardTitle>
            <CardText style={styles.description}>{article.description}</CardText>
            <CardText style={styles.description}>by {article.author}</CardText>
            <CardText style={styles.description}>{dateDisplay}</CardText>

            <CardText style={styles.description}>read the full article at
            <CardLink target="_blank" 
              href={article.url}
              style={styles.link}>
              {` ${article.source.name}`}
            </CardLink>
            </CardText>

            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
            
          </CardBody>
        </Card>
      </Div>
    );
  }
}

const styles = {
  cardHolder: {
    marginTop: '1vh'
  },
  title: {
    fontWeight: '600',
    // color: '#3399CC',
    textAlign: 'left'
  },
  description: {
    textAlign: 'left'
  },
  link: {
    textAlign: 'left',
    fontWeight: 650
  }
}

export default NewsSource;
