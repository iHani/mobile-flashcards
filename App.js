import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Platform  } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { TabNavigator, StackNavigator } from 'react-navigation';
import reducers from './src/reducers';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import ConnectedToRedux from './src/components/ConnectedToRedux';
import DeckList from './src/components/DeckList';
import CreateNewDeck from './src/components/CreateNewDeck';
import Progress from './src/components/Progress';
import DeckView from './src/components/DeckView';

const store = createStore(reducers);

const Stack = StackNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-photos-outline' size={30} color={tintColor} />
    },
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      title: 'Deck'
    }
  }
});

const TabNavigatorConfig = {
  initialRouteName: 'Decks',
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#0673a0',
    activeBackgroundColor: 'white',
    inactiveBackgroundColor: '#ededed',
    labelStyle: {
      fontWeight: 'bold',
      fontSize: 13
    },
    style: {
      height: 65,
    }
  }
};

const Tabs = TabNavigator({
  Decks: {
    screen: Stack,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-photos-outline' size={30} color={tintColor} />
    },
  },
  NewDeck: {
    screen: CreateNewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='md-add' size={30} color={tintColor} />
    },
  },
  Progress: {
    screen: Progress,
    navigationOptions: {
      tabBarLabel: 'Progress',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-stats' size={30} color={tintColor} />
    },
  },
},
TabNavigatorConfig);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Tabs />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  }
});

export default App;
