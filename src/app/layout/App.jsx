import React from 'react';

import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/navBar/NavBar';
import { Container } from 'semantic-ui-react';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
