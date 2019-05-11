import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

// animation
import posed from 'react-pose';

// components
import { Button, Card, CardBody, CardTitle, CardText, CardImg, CardLink } from 'reactstrap';

const Div = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 }
});

export default class MoreArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }
  render() {
    return (
      <Div className="col-12 col-md-6" style={styles.cardHolder}>

          <Button color='primary'
            onClick={this.props.handleClick}>
             + more articles
          </Button>
        
      </Div>
    );
  }
}

const styles = {
  cardHolder: {
    height: '11vh',
    margin: '1vh 0px',
    width: '100%',
    minWidth: '250px',
    paddingLeft: '5px',
    paddingRight: '5px',
    overflow: 'hidden',
  },
  textHolder: {
    
  }
}