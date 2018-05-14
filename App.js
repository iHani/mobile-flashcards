import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Platform  } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { TabNavigator, StackNavigator } from 'react-navigation';
import reducers from './src/reducers';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import ConnectedToRedux from './src/components/ConnectedToRedux';
import DeckList from './src/components/DeckList';
import CreateDeck from './src/components/CreateDeck';
import Progress from './src/components/Progress';
import DeckView from './src/components/DeckView';
import CreateCard from './src/components/CreateCard';
import StartQuiz from './src/components/StartQuiz';
import devToolsEnhancer from 'remote-redux-devtools';

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
      title: 'Deck'
    }
  },
  CreateCard: {
    screen: CreateCard,
    navigationOptions: {
      title: 'New Card'
    }
  },
  StartQuiz: {
    screen: StartQuiz,
    navigationOptions: {
      title: 'Quiz'
    }
  }
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
      fontSize: 13
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
      tabBarLabel: 'Decks',
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
