import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

class Progress extends Component {

  render () {
    const { state } = this.props;

    return (
      <View style={styles.container}>

        <View style={styles.container}>
          <Text>records:</Text>
          <Text style={{color: 'red'}}>{JSON.stringify(state.records, null, 2)}</Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100
  },
});

const mapStateToProps = (state, ownProps) => ({
  state,
});

export default connect(mapStateToProps)(Progress);
