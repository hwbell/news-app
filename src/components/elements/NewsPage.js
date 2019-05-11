import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

// animation
import posed from 'react-pose';

// components
import { Card, CardBody, CardTitle, CardText, CardImg, CardLink } from 'reactstrap';

const Div = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: -30, opacity: 0 }
});


export default class NewsPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      //

    }
  }
  render() {

    const article = this.props.article;
    const title = article.title;
    // console.log('article')
    // console.log(this.props.artcle)
    const time = new Date(article.publishedAt);
    const month = time.getMonth() + 1 < 10 ? `0${time.getMonth() + 1}` : time.getMonth() + 1;
    const date = time.getDate() + 1 < 10 ? `0${time.getDate() + 1}` : time.getDate() + 1;

    const dateDisplay = `posted ${month}-${date}`

    let displayTitle;
    if (title.length > 65) {
      // cut the article title - its really long sometimes
      displayTitle = title.slice(0, 65);
      // get the last space of the sliced article and make it look cleaner
      let lastSpace = displayTitle.lastIndexOf(' ');
      displayTitle = displayTitle.slice(0, lastSpace + ' ...');
    }
    else {
      displayTitle = title;
    }

    return (
      <Div className="col-12 col-md-6 col-lg-4" style={styles.cardHolder}>
        <Card style={{ height: '100%' }}>

          <div style={styles.imageHolder}>
            <CardImg src={article.urlToImage} alt="Image not available" />
          </div>

          <CardBody style={styles.textHolder}>

            <CardTitle style={styles.title}>
              {displayTitle}
            </CardTitle>

            <CardText style={styles.description}>
              {article.description &&
                article.description.slice(0, 125) + '...'}
            </CardText>

            <CardText style={styles.description}>
              <CardLink target="_blank"
                href={`https://www.google.com/search?q=${article.author}`}
                style={styles.author}>
                {article.author}
              </CardLink>
            </CardText>

            <CardText style={styles.description}>{dateDisplay}</CardText>

            <CardText style={styles.description}>read the full article at
            <CardLink target="_blank"
                href={article.url}
                style={styles.link}>
                {` ${article.source.name}`}
              </CardLink>
            </CardText>

          </CardBody>
        </Card>
      </Div>
    );
  }
}

const styles = {
  cardHolder: {
    height: '400px',
    margin: '1vh 0px',
    width: '100%',
    minWidth: '250px',
    paddingLeft: '5px',
    paddingRight: '5px',
    overflow: 'hidden',
  },
  title: {
    fontWeight: '600',
    // color: '#3399CC',
    textAlign: 'left'
  },
  imageHolder: {
    height: '175px',
    // maxHeight: '200px',
    backgroundSize: 'contain'
  },
  textHolder: {
    background: 'white',
  },
  description: {
    textAlign: 'left',
    fontSize: '13px',
    margin: '4px auto'
  },
  author: {
    textAlign: 'right',
    fontWeight: 'bolder',
    margin: '6px 0px'
  },
  link: {
    textAlign: 'left',
    fontWeight: 650,
    // margin: '4px auto'
  }
}

