import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { clearLocalNotification } from '../utils/helpers'
import { quizTaken } from '../actions';

class QuizResult extends Component {

  componentDidMount () {
    const { isReminderEnabled, quizTaken } = this.props;
    if (isReminderEnabled) {
      clearLocalNotification();
    }
    // update quizTakenToday in the store to set proper daily reminder message
    quizTaken();
  }

  render () {
    const { deck, score, navigate, correctAnswers, incorrectAnswers } = this.props;

    return (
      <View style={styles.container}>

        <View style={styles.resultBox}>
          <Text style={styles.deckText}>{deck}</Text>
        </View>
        <View style={styles.percentageBox}>
          <Text style={styles.precentageText}>Your score: %{score.toFixed(2).toString().replace(/\.00$/,'')}</Text>
        </View>

        <View style={styles.answersCountBox}>
          <View style={[styles.countBox, { backgroundColor: '#e50d0d' }]}>
            <Text style={styles.incorrectAnswersCount}>Incorrect ( {incorrectAnswers} )</Text>
          </View>
          <View style={[styles.countBox, { backgroundColor: '#23bc5b' }]}>
            <Text style={styles.correctAnsewrsCount}>Correct ( {correctAnswers} )</Text>
          </View>
        </View>

        <View style={styles.buttonsBox}>
          <TouchableOpacity
            // onPress={() => navigate('Quiz', { deck })}
            onPress={() => this.props.tryAgain()}

            style={styles.button}>
            <Text style={styles.buttonText}>Try Again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('Progress')}
            style={styles.button}>
            <Text style={styles.buttonText}>Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.goBack()}
            style={styles.button}>
            <Text style={styles.buttonText}>Back to Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deckText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 35,
    color: '#07587a',
    paddingTop: 20,
  },
  percentageBox: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#b5b5b5',
    borderStyle: 'dashed',
  },
  precentageText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#0c93cc',
    padding: 30,
  },
  answersCountBox: {
    flex: 1,
    flexDirection: 'row',
  },
  countBox: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
    padding: 10,
  },
  correctAnsewrsCount: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  incorrectAnswersCount: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  buttonsBox: {
    flex: 1,
    padding: 20,
    height: 75,
  },
  button: {
    width: 250,
    height: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    backgroundColor: '#07587a',
    borderRadius: 3,
  },
  buttonText: {
    color: '#93dfff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const mapStateToProps = (state) => ({
  state,
  isReminderEnabled: state.isReminderEnabled,
});

const mapDispatchToProps = (dispatch) => ({
  quizTaken: () => dispatch(quizTaken()),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizResult);
