import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { sayHi } from '../actions';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Progress from './Progress';

class DeckList extends Component {

  componentDidMount = () => {
    const self = this;
    setTimeout(() => self.props.sayHi('hanii'), 500);
  };

  onPress = (deck) => {
    const { navigate } = this.props.navigation;
    navigate('DeckView', { deck });
  }

  render() {
    const decks = this.props.decks;
    const keys = Object.keys(decks);

    return (
      <View style={styles.container}>

        <View style={[styles.deckRow, { height: 35 }]}>
          <View style={styles.headerDeckBox}>
            <Text style={styles.headerDeckText}>Decks</Text>
          </View>
          <View style={styles.headerCountBox}>
            <Text style={styles.headerCountText}>Cards</Text>
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

          {/* <Text style={{ color: 'white' }}>{JSON.stringify(this.props.state.decks, null, 2)}</Text> */}
          <Text style={{ color: 'white' }}>{this.props.message}</Text>
          <Text style={{ color: 'white' }}>state tree: {JSON.stringify(this.props.state, null, 2)}</Text>

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

  headerDeckBox: {
    flex: 5,
    justifyContent: 'center',
    paddingLeft: 20,
    borderBottomWidth: 2,
    borderColor: '#0a98d1',
    backgroundColor: '#11465b',
  },
  headerDeckText: {
    color: '#d3f2ff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerCountBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#a3e3ff',
    borderColor: '#0a98d1',
    backgroundColor: '#11465b',
  },
  headerCountText: {
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
  message: state.message,
  decks: state.decks
});

const mapDispatchToProps = (dispatch) => ({
  sayHi: (name) => dispatch(sayHi(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
