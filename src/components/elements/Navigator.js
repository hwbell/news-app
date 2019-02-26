import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

// components 
import Button from '@material-ui/core/Button';

// define heading categories
// business entertainment general health science politics sports technology
const headings = [
  'technology',
  'business',
  'entertainment',
  'health',
  'science',
  'politics',
  
]

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }
  render() {
    return (
      <div className="container" style={styles.container}>
        <div className="row">
          {
            headings.map((heading, i) => {
              return (
                <Button key={i} className="col-4 col-md-2 containedPrimary" style={styles.link}>{heading}</Button>
              )
            })
          }
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    margin: '5vh',
  },
  link: {
    padding: '1vh',
    fontFamily: 'inherit',
    fontWeight: '650',
    fontSize: 'calc(0.4vw + 12px)',
    color: '#4527A0'
  }
}