import React from 'react';

const List = (props) => {
  //searchResults
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Language</th>
          <th>Category1</th>
          <th>Category2</th>
          <th>Granularity</th>
        </tr>
      </thead>
      <tbody>
        {props.searchResults.map((event, index) => (
          <tr className="event" key={index}>
            <td className="event-date">
              {event.date}
            </td>
            <td className="event-description">
              {event.description}
            </td>
            <td className="event-language">
              {event.lang}
            </td>
            <td className="event-category1">
              {event.category1}
            </td>
            <td className="event-category2">
              {event.category2}
            </td>
            <td className="event-granularity">
              {event.granularity}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default List;