import React, { Component } from 'react';
import { Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { sayHi } from '../actions';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

class ConnectedToRedux extends Component {

  componentDidMount = () => {
    const self = this;
    setTimeout(() => self.props.sayHi(), 500);
  };

  render() {
    const xx = JSON.stringify(Object.keys(this.props.state.decks));

    return (
      <View>
      <Text>
        <Ionicons name='ios-bookmarks' size={30} color={'red'} />
        I am ConnectedTocRedux. {xx}
      </Text>
      <Button
        onPress={() => 'Bonga'}
        title="Create New Deck"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>

    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps,
  message: state.message
});

const mapDispatchToProps = (dispatch) => ({
  sayHi: () => dispatch(sayHi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedToRedux);
