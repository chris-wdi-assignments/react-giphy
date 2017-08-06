import React, {Component} from 'react';
import SearchContainer from './containers/SearchContainer';

class HelloWorld extends Component {
  render () {
    return (
      <div>
        <h1>Hello World!</h1>
        <SearchContainer />
      </div>
    )
  }
}

export default HelloWorld;
