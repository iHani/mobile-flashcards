import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { sayHi } from '../actions';

class ConnectedToRedux extends Component {

  componentDidMount = () => {
    const self = this;
    setTimeout(() => self.props.sayHi(), 500);
  };

  render() {
    return (
      <Text>I am ConnectedToRedux. {this.props.message}</Text>
    )
  }
}

const mapStateToProps = (state) => ({
  message: state.message
});

const mapDispatchToProps = (dispatch) => ({
  sayHi: () => dispatch(sayHi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedToRedux);
