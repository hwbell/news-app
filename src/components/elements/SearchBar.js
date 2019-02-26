import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

// components
// thank you very much to https://www.npmjs.com/package/react-search-field
import SearchField from "react-search-field";

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onEnter = this.onEnter.bind(this);

    this.state = {
      //

    }
  }

  onChange(value, event) {
    // event.preventDefault();
    console.log(`current search query: ${value}`)
  }

  onEnter(value, event) {
    // event.preventDefault();
    console.log(`new search running with ${value}`)
    this.props.handleSearch(value.toString());
  }

  render() {

    return (
      <div className="row" style={styles.container}>

        <div className="col-12 col-sm-4">
          <div style={styles.logoHolder}>
            <p style={styles.logo}>
              News Now
          </p>
            <i className="far fa-newspaper" style={styles.icon}></i>
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <SearchField
            style={{ margin: 'auto auto' }}
            placeholder="Search..."
            onChange={this.onChange}
            onEnter={this.onEnter}
            onSearchClick={this.onEnter}
            classNames="test-class"
          />
        </div>

        <div className="col-12 col-sm-4">
          <p style={styles.poweredBy}>
            powered by
            <a target="_blank" href="https://www.newsapi.org">
              {' newsapi.org'}
            </a>
          </p>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    margin: '2vh 0px'
  },
  logoHolder: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  logo: {
    // margin: '1.5vh 0vh',
    fontWeight: 'bold',
    fontSize: 24
  },
  icon: {
    fontSize: 25,
    padding: '1vh'
  },
  poweredBy: {
    paddingLeft: 20,
    margin: '1vh',
    fontWeight: 'bold',
    fontSize: 16
  },
  link: {
    color: '#4527A0',
    fontWeight: 650
  }
}

export default SearchBar;
