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
    this.state = {
      //

    }
  }

  onChange (value, event) {
    // event.preventDefault();
    console.log(`current search query: ${value}`)
  }

  onEnter (value, event) {
    // event.preventDefault();
    console.log(`new search running with ${value}`)
  }

  render() {

    return (
      <SearchField
        placeholder="Search..."
        onChange={this.onChange}
        onEnter={this.onEnter}
        onSearchClick={this.onEnter}
        classNames="test-class"
      />
    )
  }
}

const styles = {

}

export default SearchBar;
