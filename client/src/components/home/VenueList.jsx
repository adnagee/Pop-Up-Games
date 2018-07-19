import React from 'react';
import VenueEntry from './VenueEntry.jsx';

var VenueEntryList = (props) => (
  <div>
  <h3>Venue Entry List</h3>
  <ul>
    {
      props.entries.forEach((entry, index) => {
        <VenueEntry entry={entry} key={index} />
      })
    }
  </ul>
  </div>
  )


export default VenueEntryList;