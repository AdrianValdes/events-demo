import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvent, updateEvent, deleteEvent } from '../eventActionsCreators';
import { Grid, GridColumn } from 'semantic-ui-react';
import EventList from '../EventList/EventList';

class EventDashboard extends Component {
  handleDeleteEvent = (id) => {
    this.props.deleteEvent(id);
  };

  render() {
    const { events } = this.props;
    return (
      <Grid>
        <GridColumn width={10}>
          <EventList events={events} deleteEvent={this.handleDeleteEvent} />
        </GridColumn>
        <GridColumn width={6}>
          <h2>Activity Feed</h2>
        </GridColumn>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
});

const mapDispatchToProps = {
  createEvent,
  updateEvent,
  deleteEvent,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDashboard);
