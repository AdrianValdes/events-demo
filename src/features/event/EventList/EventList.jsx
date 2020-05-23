import React, { Component } from 'react';
import EventListItem from './EventListItem';

class EventList extends Component {
  render() {
    const { events, selectEvent, deleteEvent } = this.props;
    return (
      <React.Fragment>
        {events.map((event) => {
          return (
            <EventListItem
              deleteEvent={deleteEvent}
              key={event.id}
              event={event}
              selectEvent={selectEvent}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
export default EventList;
