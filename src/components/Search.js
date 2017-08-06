import React, { Component } from 'react';

class Search extends Component {
  render () {
    return (
      <div>
        <form onSubmit={this.props.onSubmitHandler}>
          <input
            onChange={this.props.onChangeHandler}
            type="text"
            value={this.props.query}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default Search;
