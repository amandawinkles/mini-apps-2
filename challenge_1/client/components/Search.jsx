import React from 'react';

const Search = (props) => (
  //keyword, handleInput, handleSubmit
  <form onSubmit={props.handleSubmit}>
    <label className="label">
      Search By Keyword:
      <br/>
      <input type="search" keyword={props.keyword} onChange={props.handleInput} />
    </label>
    <input type="submit" value="Submit" />
  </form>
);


export default Search;