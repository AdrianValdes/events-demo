import React, { Component } from 'react';
import EventListItem from './EventListItem';

class EventList extends Component {
  render() {
    const { events, deleteEvent } = this.props;
    return (
      <React.Fragment>
        {events.map((event) => {
          return (
            <EventListItem
              deleteEvent={deleteEvent}
              key={event.id}
              event={event}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
export default EventList;
