// Just an example of a connected component
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

class ConnectedToRedux extends Component {

  render () {
    const state = JSON.stringify(Object.keys(this.props.state));

    return (
      <View style={styles.container}>
        <Text>
          <Ionicons name='alarm' size={30} color={'red'} />
          This is ConnectedTocRedux.js
        </Text>
        <Text>Tree state {JSON.stringify(state, null, 2)}</Text>
        <Button
          onPress={() => ''}
          title="Button"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
});

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(ConnectedToRedux);
