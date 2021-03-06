import React, {Component} from 'react';
import Search from '../components/Search.js';
import Results from '../components/Results.js';
import $ from 'jquery-ajax';
import api from '../apikey.js';
const apikey = api.key;

class SearchContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      query: '',
      hasSubmittedSearch: false,
      results: []
    };
  }
  renderGifs (results) {
    this.setState({
      query: '',
      results: results,
      hasSubmittedSearch: true
    });
  }
  componentDidMount () {
    const url = 'https://api.giphy.com';  // the site
    const endpoint = '/v1/gifs/search'; // the search endpoint
    const query = "?q=bob dylan&api_key=" + apikey; // our query

    fetch(url + endpoint + query) // send GET req to the endpoint, w/query
      .then(res => res.json())  // transform response to JSON blob
      .then(res => this.renderGifs(res)); // pass on to rendering method
  }
  onChange (e) {
    this.setState({ query: e.target.value });
  }
  onSubmit (e) {
    e.preventDefault();
    console.log('submitting', this.state.query);
    $.ajax({
      method: "GET",
      url: "https://api.giphy.com/v1/gifs/search",
      data: {
        q: this.state.query,
        api_key: apikey
      }
    }).then(this.renderGifs);
  }
  render () {
    if (this.state.hasSubmittedSearch) {
      return (
        <Results results={this.state.results} />
      )
    } else {
      return (
        <Search
          onChangeHandler={e => this.onChange(e)}
          onSubmitHandler={e => this.onSubmit(e)}
          query={this.state.query} />
      )
    }
  }
}

export default SearchContainer;
