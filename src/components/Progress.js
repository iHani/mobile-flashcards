import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { sayHi } from '../actions';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

class Progress extends Component {

  render() {
    const decks = this.props.state.decks;

    return (
      <View style={styles.container}>
        <Text>Progress view</Text>
        {/* <Text>Progress view: {this.props.navigation.state.params.deck}</Text> */}
        {/* <Text>{JSON.stringify(this.props.navigation, null, 2)}</Text> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps,
  message: state.message
});

const mapDispatchToProps = (dispatch) => ({
  sayHi: () => dispatch(sayHi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Progress);
