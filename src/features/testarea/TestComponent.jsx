import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './testActions';
import { Button } from 'semantic-ui-react';

class TestComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter, data } = this.props;
    return (
      <div>
        <h1>Test Component</h1>
        <h3>The answer is: {data}</h3>
        <Button onClick={incrementCounter} content="Increment" positive />
        <Button onClick={decrementCounter} content="Decrement" negative />
      </div>
    );
  }
}

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
};

const mapStateToProps = (state) => ({
  data: state.test.data,
});
export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
