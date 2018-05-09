import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class CreateDeck extends Component {
  render() {
    return (
      <View>
        <Text>CreateDeck component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  singleDeck: {
    flex: 1,
  }
});

export default CreateDeck;
