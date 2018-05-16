import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

class DeckView extends Component {

  render() {
    const { decks } = this.props.state;
    const deck = this.props.navigation.state.params.deck;
    const questions = decks[deck];
    const totalCards = decks[deck].questions.length
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>

        <View style={styles.textsSection}>
          <Text style={styles.deckTitle}>{deck}</Text>
          <Text style={styles.cards}>Cards ({totalCards})</Text>
        </View>

        <View style={styles.buttonsSection}>
          <TouchableOpacity
            style={styles.btnAddCard}
            onPress={() => navigate('CreateCard', { deck })}
            underlayColor='#fff'>
            <Text style={styles.addCardText}>Add Card</Text>
          </TouchableOpacity>
          {totalCards > 0 &&
            <TouchableOpacity
              style={styles.btnStartQuiz}
              onPress={() => navigate('Quiz', { deck })}
              underlayColor='#fff'>
              <Text style={styles.startQuizText}>Start Quiz</Text>
            </TouchableOpacity>
          }
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textsSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deckTitle: {
    fontWeight: 'bold',
    fontSize: 64,
    color: '#07587a',
  },
  cards: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#afafaf',
    paddingTop: 20,
  },
  buttonsSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAddCard: {
    margin: 5,
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: 220,
    backgroundColor: '#d3f2ff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#07587a',
    shadowColor: '#c9dce5',
    shadowOpacity: 98,
    shadowRadius: 5,
  },
  addCardText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#07587a',
    textAlign:'center',
  },
  btnStartQuiz: {
    margin: 5,
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: 220,
    backgroundColor: '#07587a',
    borderRadius: 5,
    shadowColor: '#d3f2ff',
    shadowOpacity: 2,
    shadowRadius: 5,
  },
  startQuizText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#d3f2ff',
    textAlign:'center',
  },
});

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(DeckView);
