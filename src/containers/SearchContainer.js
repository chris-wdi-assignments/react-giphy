import React, {Component} from 'react';
import Search from '../components/Search.js';
import Results from '../components/Results.js';

const hardCodedResults = {
  "data": [
    {
      "type": "gif",
      "id": "iuHaJ0D7macZq",
      "url": "http://giphy.com/gifs/cat-day-tomorrow-iuHaJ0D7macZq",
      "source": "https://www.reddit.com/r/CatGifs/comments/5f0h9a/tomorrow_is_legs_day/",
      "rating": "pg",
      "images": {
        "fixed_height": {
          "url": "http://media4.giphy.com/media/iuHaJ0D7macZq/200.gif"
        }
      }
    },
    {
      "type": "gif",
      "id": "Z1kpfgtHmpWHS",
      "url": "http://giphy.com/gifs/cat-way-make-Z1kpfgtHmpWHS",
      "source": "http://shewhoseeks.blogspot.com/2016/03/cat-gifs-that-make-me-laugh-way-more.html",
      "rating": "g",
      "images": {
        "fixed_height": {
          "url": "http://media4.giphy.com/media/Z1kpfgtHmpWHS/200.gif"
        }
      }
    }
  ],
  "meta": {
    "status": 200,
    "msg": "OK"
  },
  "pagination": {
    "total_count": 1947,
    "count": 25,
    "offset": 0
  }
}

class SearchContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      query: '',
      hasSubmittedSearch: false,
      results: []
    };
  }
  onChange (e) {
    this.setState({ query: e.target.value });
  }
  onSubmit (e) {
    e.preventDefault();
    console.log('submitting', this.state.query);
    this.setState({
      query: '',
      results: hardCodedResults,
      hasSubmittedSearch: true
    });
  }
  render () {
    if (this.state.hasSubmittedSearch) {
      return (
        <Results results={this.state.results} />
      )
    } else {
      return (
        <Search
          onChangeHandler={this.onChange.bind(this)}
          onSubmitHandler={this.onSubmit.bind(this)}
          query={this.state.query} />
      )
    }
  }
}

export default SearchContainer;
