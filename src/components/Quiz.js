import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { newQuizRecord } from '../actions';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

class Quiz extends Component {

  state = {
    totalCards: 0,
    currentQuestionIndex: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    peek: false
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.deck} Cards`,
  });

  componentWillMount = () => this.setState({ totalCards: this.props.questions.length });

  handleCorrect = () => {
    this.setState(prevState => ({
      correctAnswers: prevState.correctAnswers+1,
      currentQuestionIndex: prevState.currentQuestionIndex+1,
      peek: false,
    }))
  }

  handleIncorrect = () => {
    this.setState(prevState => ({
      incorrectAnswers: prevState.incorrectAnswers+1,
      currentQuestionIndex: prevState.currentQuestionIndex+1,
      peek: false,
    }))
  }

  render() {
    const { currentQuestionIndex, totalCards, correctAnswers, incorrectAnswers, peek } = this.state;
    const quizCompleted = correctAnswers + incorrectAnswers === totalCards ? true : false

    if (quizCompleted) {
      const score = {
        [new Date().toLocaleDateString()]: {
          deck: this.props.deck,
          score: (correctAnswers/totalCards) * 100,
        }
      }

      this.props.newRecord(score);
console.log('thisprops', this.props);
      return (
        <View style={styles.container}>
          <Text>Quiz is over</Text>
          <Text>{JSON.stringify(score, null, 2)}</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.progressBox}>
          <Text style={styles.progress}>{currentQuestionIndex+1}/{totalCards}</Text>
        </View>

        <View style={styles.questionBox}>
          <Text style={styles.questionText}>{this.props.questions[currentQuestionIndex].question}</Text>
        </View>

        <TouchableOpacity
          style={styles.answerBox}
          onPress={() => this.setState({ peek: true })}>
          {!peek &&
            <Text style={styles.peekText}>Show answer</Text>
          }
          {peek &&
            <Text style={styles.answerText}>{this.props.questions[currentQuestionIndex].answer}</Text>
          }
        </TouchableOpacity>

        <View style={styles.checkButtonsBox}>
          <TouchableOpacity
            style={styles.btnCorrectAnswer}
            onPress={this.handleCorrect}>
            <Text style={styles.correctAnswerText}>Correc000t</Text>
          </TouchableOpacity>
          {totalCards > 0 &&
            <TouchableOpacity
              style={styles.btnIncorrectAnswer}
              onPress={this.handleIncorrect}>
              <Text style={styles.incorrectAnswerText}>Incorrect</Text>
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
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  questionBox: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3f2ff',
    padding: 20,
  },
  questionText: {
    color: '#07587a',
    fontWeight: 'bold',
    fontSize: 25,
  },
  answerBox: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#07587a',
    padding: 20
  },
  answerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  checkButtonsBox: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 50
  },

  progressBox: {
    backgroundColor: '#d3f2ff',
  },
  progress: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey'
  },

  buttonsSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCorrectAnswer: {
    margin: 5,
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: 220,
    backgroundColor: '#0d991b',
    borderRadius: 5,
  },
  correctAnswerText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#b2ffb9',
    textAlign:'center',
  },
  btnIncorrectAnswer: {
    margin: 5,
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: 220,
    backgroundColor: '#e50d0d',
    borderRadius: 5,
  },
  incorrectAnswerText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ffdcd3',
    textAlign:'center',
  },
  peekText: {
    color: '#0784ba'
  }

});

const mapStateToProps = (state, ownProps) => {
  const deck = state.decks[ownProps.navigation.state.params.deck].title
  const questions = state.decks[ownProps.navigation.state.params.deck].questions;
  return ({ deck, questions });
}

const mapDispatchToProps = (dispatch) => ({
  newRecord: (score) => dispatch(newQuizRecord(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
