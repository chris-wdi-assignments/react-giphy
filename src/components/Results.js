import React, {Component} from 'react';

class Results extends Component {
  render () {
    const results = this.props.results.data.map((gif, i) => {
      return (
        <div key={i}>
          <img src={gif.images.fixed_height.url} alt="a gif" />
        </div>
      )
    });
    return (
      <div>
        {results}
      </div>
    )
  }
}

export default Results;
