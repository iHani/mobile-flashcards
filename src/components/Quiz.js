import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { newQuizRecord } from '../actions';
import { Ionicons } from '@expo/vector-icons';
import { QuizResult } from './index';
import { setLocalNotification, clearLocalNotification } from '../utils/helpers';

class Quiz extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deck,
  });

  state = {
    totalCards: 0,
    currentQuestionIndex: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    peek: false,
    quizCompleted: false,
  }

  componentWillMount = () => this.setState({ totalCards: this.props.questions.length });

  handleAnswerGuess = (guess) => {
    const quizCompleted = this.state.currentQuestionIndex + 1 === this.state.totalCards ? true : false;
    this.setState((prevState, props) => ({
      [guess]: prevState[guess] + 1,
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
      quizCompleted
    }));
  }

  tryAgain = () => {
    this.setState(({
      currentQuestionIndex: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
      peek: false,
      quizCompleted: false,
    }))
  }

  render() {
    const { questions, deck, isReminderEnabled } = this.props;
    const { currentQuestionIndex, totalCards, correctAnswers, incorrectAnswers, peek } = this.state;
    const quizCompleted = currentQuestionIndex === totalCards ? true : false;

    if (quizCompleted) {
      const score = (correctAnswers / totalCards) * 100;
      const record = {
        [new Date().toLocaleDateString()]: {
          deck,
          score,
        }
      };

      // creat new record in records
      this.props.newRecord(record);

      // clear todays reminder and set a new one for tomorrow
      if (isReminderEnabled) {
        clearLocalNotification().then(() => setLocalNotification())
      }

      const { navigate, goBack } = this.props.navigation;
      return (
        <QuizResult
          navigate={navigate} // not sure why I cant access navigate from within <QuizResult>s props, so Im passing it here
            goBack={goBack} // not sure why I cant access navigate from within <QuizResult>s props, so Im passing it here
              deck={deck}
              score={score}
              correctAnswers={correctAnswers}
              incorrectAnswers={incorrectAnswers}
              tryAgain={this.tryAgain} />
            )
          }

          return (
            <View style={styles.container}>
              <View style={styles.progressBox}>
                <Text style={styles.progress}>{currentQuestionIndex+1}/{totalCards}</Text>
              </View>

              <View style={styles.questionBox}>
                <Text style={styles.questionText}>{questions[currentQuestionIndex].question}</Text>
              </View>

              <TouchableWithoutFeedback
                onPressIn={() => this.setState({ peek: true })}
                onPressOut={() => this.setState({ peek: false })}>
                <View style={styles.answerBox}>
                  {!peek &&
                    <View>
                      <Text style={styles.peekText}>
                        <Ionicons name='ios-book' size={45} color='#0c93cc' />
                      </Text>
                      <Text style={styles.peekText}>Show answer</Text>
                    </View>
                  }
                  {peek &&
                    <Text style={styles.answerText}>{questions[currentQuestionIndex].answer}</Text>
                  }
                </View>
              </TouchableWithoutFeedback>

              <View style={styles.checkButtonsBox}>
                <TouchableOpacity
                  style={styles.btnCorrectAnswer}
                  onPress={() => this.handleAnswerGuess('correctAnswers')} >
                  <Text style={styles.correctAnswerText}>Correct</Text>
                </TouchableOpacity>
                {totalCards > 0 &&
                  <TouchableOpacity
                    style={styles.btnIncorrectAnswer}
                    onPress={() => this.handleAnswerGuess('incorrectAnswers')} >
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
          // flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#d3f2ff',
          padding: 20,
          height: 150,
        },
        questionText: {
          color: '#07587a',
          fontWeight: 'bold',
          fontSize: 25,
        },
        answerBox: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#07587a',
          padding: 20,
          // height: 150,
        },
        answerText: {
          color: 'white',
          fontWeight: 'bold',
          fontSize: 25,
        },
        checkButtonsBox: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          paddingTop: 20,
          paddingBottom: 50,
        },
        progressBox: {
          backgroundColor: '#d3f2ff',
        },
        progress: {
          alignSelf: 'center',
          fontSize: 16,
          fontWeight: 'bold',
          color: 'grey',
        },
        buttonsSection: {
          // flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        btnCorrectAnswer: {
          margin: 5,
          paddingTop: 20,
          paddingBottom: 20,
          minWidth: 220,
          backgroundColor: '#23bc5b',
          borderRadius: 5,
        },
        correctAnswerText: {
          fontWeight: 'bold',
          fontSize: 18,
          color: 'white',
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
          color: 'white',
          textAlign:'center',
        },
        peekText: {
          color: '#0c93cc',
          textAlign: 'center',
        },
      });

      const mapStateToProps = (state, ownProps) => {
        const deck = state.decks[ownProps.navigation.state.params.deck].title;
        const questions = state.decks[ownProps.navigation.state.params.deck].questions;
        const { isReminderEnabled } = state;
        return ({ deck, questions, isReminderEnabled });
      }

      const mapDispatchToProps = (dispatch) => ({
        newRecord: (record) => dispatch(newQuizRecord(record)),
      });

      export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
