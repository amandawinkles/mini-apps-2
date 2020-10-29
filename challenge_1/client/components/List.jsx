import React from 'react';

const List = (props) => {
  //searchResults
  const events = props.searchResults.map((event, index) =>
    <li className="event" key={index}>
      <span className="event-date">
        {event.date}
      </span>
      <span className="event-description">
        {event.description}
      </span>
      <span className="event-language">
        {event.lang}
      </span>
      <span className="event-category1">
        {event.category1}
      </span>
      <span className="event-category2">
        {event.category2}
      </span>
      <span className="event-granularity">
        {event.granularity}
      </span>
    </li>
  );
  return (
    <div className="list">
      <ul>
        {events}
      </ul>
    </div>
  );
};


export default List;