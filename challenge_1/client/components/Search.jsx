import React from 'react';

const Search = (props) => (
  //keyword, handleInput, handleSubmit
  <form onSubmit={props.handleSubmit}>
    <label>
      Search Events By Keyword:
      < br />
      <input type="search" aria-label="Enter Keyword" keyword={props.keyword} onChange={props.handleInput} />
    </label>
    < br />
    <input type="submit" value="Submit" />
  </form>
);


export default Search;