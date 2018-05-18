import React, { Component } from 'react';
import {
  Text,
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { newCard } from '../actions';

class CreateCard extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deck,
  });

  state = {
    question: '',
    answer: '',
    statusMessage: undefined,
    statusMessageColor: 'black',
  }

  handleCreateCard = () => {
    const { question, answer } = this.state;

    if (question.trim() && answer.trim()) {
      const card = {
        title: this.props.deck,
        question,
        answer,
      }

      // Create new card
      this.props.newCard(card);

      // Clear TextInput's and update statusMessage
      this.setState({
        question: '',
        answer: '',
        statusMessage: 'Card created successfully!',
        statusMessageColor: 'green',
      });
      this.questionTextInput.focus()
    } else {
      this.setState({
        statusMessage: 'Please enter a question and an answer!',
        statusMessageColor: 'red',
      });
    }
  }

  render () {
    const { statusMessage, statusMessageColor } = this.state;

    return (
      <ScrollView keyboardShouldPersistTaps='always' style={styles.scrollView}>
        <KeyboardAvoidingView
          behavior='padding'
          style={styles.container}>
          <View>
            <Text style={styles.headerText}>Add New Card</Text>
            <TextInput
              value={this.state.question}
              style={styles.textInput}
              onChangeText={question => this.setState({ question, statusMessage: undefined })}
              placeholder='Question'
              autoFocus
              onSubmitEditing={() => this.answerTextInput.focus()}
              blurOnSubmit={false}
              ref={input => this.questionTextInput = input}
            />
            <TextInput
              value={this.state.answer}
              style={[styles.textInput, { height: 80 }]}
              onChangeText={answer => this.setState({ answer, statusMessage: undefined })}
              multiline={true}
              numberOfLines={4}
              placeholder='Answer'
              ref={input => this.answerTextInput = input}
            />
            {statusMessage &&
              <Text style={[styles.statusMessage, { color: statusMessageColor }]}>{statusMessage}</Text>
            }
            <TouchableOpacity
              style={styles.btnCreateCard}
              onPress={this.handleCreateCard}
              underlayColor='#fff'>
              <Text style={styles.createDeckText}>Add</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 30,
    color: '#07587a',
  },
  textInput: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    marginTop: 15,
    fontWeight: 'bold',
    color: '#0692cc',
    borderRadius: 5,
    width: 80,
    fontSize: 20,
    borderColor: '#07587a',
    borderWidth: 2,
    minWidth: 300,
  },
  btnCreateCard: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    minWidth: 220,
    backgroundColor: '#07587a',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#07587a',
    shadowColor: '#c9dce5',
    shadowOpacity: 98,
    shadowRadius: 5,
    alignItems: 'center',
  },
  createDeckText: {
    color: '#d3f2ff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  statusMessage: {
    fontSize: 17,
    paddingTop: 10,
    alignSelf: 'center',
  }
});

const mapStateToProps = (state, ownProps) => {
  return ({
    deck: ownProps.navigation.state.params.deck
  });
}

const mapDispatchToProps = (dispatch) => ({
  newCard: (card) => dispatch(newCard(card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCard);
