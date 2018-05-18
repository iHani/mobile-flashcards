import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { enableReminder } from '../actions';

class Reminder extends Component {

  toggleReminderSwitch = () => {
    const toggle = this.props.isReminderEnabled;
    this.props.enableReminder(!toggle);
  }

  getDailyMessage = () => {
    console.log('ddddddd', this.props);
    return this.props.quizTakenToday
    ? `👍 You've taken today's quiz, good job!`
    : `👋 Don't forget to take today's quizzes!`
  }

  render () {
    const { isReminderEnabled, quizTakenToday } = this.props;
    const borderColor = quizTakenToday ? '#2bc450' : 'red';
    const backgroundColor = quizTakenToday ? '#c1ffd0' : '#ffe8eb';

    return (
      <View style={styles.container}>

        <View style={[styles.dailyMessaeBox, { borderColor, backgroundColor }]}>
          <Text style={styles.dailyMessaeText}>{this.getDailyMessage()}</Text>
        </View>

        <View style={styles.switchBox}>
          <View style={styles.switchLabelBox}>
            <Text style={styles.switchLabelText}>Enable Daily Notification</Text>
          </View>
          <View style={styles.switcherBox}>
            <Switch onValueChange={this.toggleReminderSwitch} value={isReminderEnabled} />
          </View>
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
    paddingTop: 80,
  },
  dailyMessaeBox: {
    height: 80,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 5,
    borderWidth: 1,
    // borderStyle: 'dashed',
  },
  dailyMessaeText: {
    color: '#195872',
    fontWeight: 'bold',
    fontSize: 16,
  },

  switchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 75,
  },
  switchLabelBox: {
    padding: 18,
    justifyContent: 'center',
  },
  switchLabelText: {
    color: 'black',
    fontSize: 16,
  },
  switcherBox: {
    padding: 10,
    justifyContent: 'center',
  },
});

const mapStateToProps = ({ isReminderEnabled, quizTakenToday }) => ({
  isReminderEnabled,
  quizTakenToday
});

const mapDispatchToProps = (dispatch) => ({
  enableReminder: (option) => dispatch(enableReminder(option)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Reminder);
