import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

class QuizResult extends Component {

  render() {

    const { deck, score, navigate } = this.props.ownProps;
    console.log('oooo', this.props);

    return (
      <View style={styles.container}>

        <View style={styles.resultBox}>
          <Text style={styles.text}>Quiz Result</Text>
          <Text style={styles.text}>{deck}</Text>
          <Text style={styles.text}>%{score}</Text>
        </View>

        <View style={styles.buttonsSection}>
          <TouchableOpacity
            style={styles.btnAddCard}
            onPress={() => navigate('Quiz', { deck })}
            underlayColor='#fff'>
            <Text style={styles.addCardText}>Try Again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnStartQuiz}
            onPress={() => navigate('Progress')}
            underlayColor='#fff'>
            <Text style={styles.startQuizText}>Show Progress</Text>
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
  text: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#07587a',
    padding: 20,
  }
});

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  state
});

export default connect(mapStateToProps)(QuizResult);
