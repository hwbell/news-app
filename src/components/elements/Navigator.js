import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

// components 
import {Button} from 'reactstrap';

// define heading categories
// business entertainment general health science politics sports technology
const headings = [
  'technology',
  'business',
  'entertainment',
  'sports',
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
                <Button key={i} 
                  color="link"
                  className="nav-link col-4 col-md-2" 
                  style={styles.link}
                  onClick={()=>this.props.onClick(heading)}>{heading}</Button>
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
    marginBottom: '2vh',
  },
  link: {
    padding: '1vh',
    fontFamily: 'inherit',
    fontWeight: '650',
    fontSize: 'calc(0.5vw + 14px)',
    // color: '#4527A0'
  }
}