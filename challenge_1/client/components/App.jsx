import React from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import Search from './Search.jsx';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      searchResults: [],
      currentPage: 0,
      pageCount: 0
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handleInput(event) {
    event.preventDefault();
    this.setState({
      keyword: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.get(`/events?q=${this.state.keyword}&_page=${this.state.currentPage + 1}&_limit=10`)
      .then((results) => {
        this.setState({
          searchResults: results.data,
          currentPage: 0,
          pageCount: (results.headers["x-total-count"]) / 10
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handlePageClick(page) {
    axios.get(`/events?q=${this.state.keyword}&_page=${page.selected + 1}`)
      .then((results) => {
        this.setState({
          searchResults: results.data,
          currentPage: page.selected
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="historical-events">
        <header>
          <h2>Historical Events Finder</h2>
        </header>
        <Search keyword={this.state.keyword} handleInput={this.handleInput} handleSubmit={this.handleSubmit} />
        <List searchResults={this.state.searchResults} />
        <ReactPaginate
        pageCount={this.state.pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-ellipsis'}
        onPageChange={this.handlePageClick}
        activeClassName={'active-page'}
        containerClassName={'pagination-container'}
        pageClassName={'page'}
        />
      </div>
    );
  }
};


export default App;