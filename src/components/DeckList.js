import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { sayHi } from '../actions';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Progress from './Progress';

class DeckList extends Component {

  state = {
    count: 0
  }

  onPress = (deck) => {
    const { navigate } = this.props.navigation;
    navigate('DeckView', { deck });
    this.setState({
      count: this.state.count+1
    })
  }

  render() {
    const decks = this.props.state.decks;
    const keys = Object.keys(decks);

    return (
      <View style={styles.container}>

        <View style={[styles.deckRow, { height: 35 }]}>
          <View style={[styles.headerBox, { flex: 5, borderColor: '#0a98d1' }]}>
            <Text style={styles.headerText}>Decks</Text>
          </View>
          <View style={[styles.headerBox, { flex: 1, borderColor: '#0a98d1', alignItems: 'center' }]}>
            <Text style={styles.headerText}>Cards</Text>
          </View>
        </View>

        <ScrollView>
          {keys && keys.map(key => (
            <TouchableOpacity onPress={()=> this.onPress(key)} key={key}>
              <View style={styles.deckRow}>
                <View style={styles.titleBox}>
                  <Text style={styles.titleText}>{decks[key].title}</Text>
                </View>
                <View style={styles.countBox}>
                  <Text style={styles.countText}>{decks[key].questions.length}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07587a',
  },
  deckRow: {
    backgroundColor: 'pink',
    flexDirection: 'row',
    height: 75,
  },

  headerBox: {
    justifyContent: 'center',
    paddingLeft: 20,
    backgroundColor: '#11465b',
    borderBottomWidth: 2,
    borderColor: '#a3e3ff',
  },
  headerText: {
    color: '#d3f2ff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  titleBox: {
    justifyContent: 'center',
    flex: 5,
    paddingLeft: 20,
    backgroundColor: '#d3f2ff',
    borderBottomWidth: 4,
    borderColor: '#a3e3ff',
  },
  titleText: {
    color: '#195872',
    fontSize: 23,
    fontWeight: 'bold',
  },

  countBox: {
    flex: 1,
    backgroundColor: '#0879a8',
    justifyContent: 'center',
    alignItems:'center',
    borderBottomWidth: 4,
    borderColor: '#065f84',

  },
  countText: {
    fontSize: 20,
    color: '#d3f2ff',
    fontWeight: 'bold',

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

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
