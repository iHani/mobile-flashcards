import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { sayHi } from '../actions';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

class Progress extends Component {

  render() {
    const { state } = this.props;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>records:</Text>
          <Text style={{color: 'red'}}>{JSON.stringify(state.records, null, 2)}</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 100
  },
});

const mapStateToProps = (state, ownProps) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  sayHi: () => dispatch(sayHi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Progress);
