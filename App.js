import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Platform  } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import devToolsEnhancer from 'remote-redux-devtools';
import reducers from './src/reducers';
import {
  DeckList,
  CreateDeck,
  Progress,
  DeckView,
  QuizResult,
  CreateCard,
  Quiz,
  Reminder,
} from './src/components';

const store = createStore(reducers, devToolsEnhancer());

const DecksStack = StackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-photos-outline' size={30} color={tintColor} />
    },
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      title: 'Deck',
    }
  },
  CreateCard: {
    screen: CreateCard,
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      tabBarVisible: false,
    }
  },
  QuizResult: {
    screen: QuizResult,
    navigationOptions: {
      title: 'Quiz Result',
    }
  },
});

const TabNavigatorConfig = {
  initialRouteName: 'DeckList',
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#0673a0',
    activeBackgroundColor: 'white',
    inactiveBackgroundColor: '#ededed',
    labelStyle: {
      fontWeight: 'bold',
      fontSize: 13,
    },
    style: {
      height: 65,
    }
  }
};

const Tabs = TabNavigator({
  DeckList: {
    screen: DecksStack,
    navigationOptions: {
      // tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-photos-outline' size={30} color={tintColor} />
    },
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: 'Create Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='md-add' size={30} color={tintColor} />
    },
  },
  Progress: {
    screen: Progress,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-stats' size={30} color={tintColor} />
    },
  },
  Reminder: {
    screen: Reminder,
    navigationOptions: {
      tabBarLabel: 'Reminder',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-alarm' size={30} color={tintColor} />
    },
  },
},
TabNavigatorConfig);

class App extends Component {
  render () {
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
