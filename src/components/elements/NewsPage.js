import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

// components
import { Card, CardBody, CardTitle, CardText, CardImg, CardLink } from 'reactstrap';


class NewsSource extends Component {

  constructor(props) {
    super(props);

    this.state = {
      //

    }
  }
  render() {

    const article = this.props.article;

    return (
      <div className="col-12 col-md-6" style={styles.cardHolder}>
        <Card>
          <CardImg top width="100%" src={article.urlToImage} alt="Card image cap" />
          
          <CardBody>
            
            <CardTitle style={styles.title}>{article.title}</CardTitle>
            <CardText style={styles.description}>{article.description}</CardText>
            <CardText style={styles.description}>by {article.author}</CardText>
            
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
      </div>
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
