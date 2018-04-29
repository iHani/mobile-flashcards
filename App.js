import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import ConnectedToRedux from './src/components/ConnectedToRedux';

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ConnectedToRedux />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
