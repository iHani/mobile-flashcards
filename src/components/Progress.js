import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { lastSevenDays } from '../utils/helpers';
import Chart from 'react-native-chartjs';

class Progress extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Progress',
  });

  getDeckRecord = (deck) => {
    const { records } = this.props;
    const days = lastSevenDays();
    return days.map(day => records[day] && records[day][deck] ? records[day][deck] : 0);
  }

  chartConfigurationReact = (deck) => {
    const data = this.getDeckRecord(deck)
    return {
      type: 'line',
      data: {
        labels: lastSevenDays().map(day => day.slice(0, day.length - 5)),
        datasets: [{
          label: deck,
          data,
          backgroundColor: '#f5e2ff',
          borderColor: '#8a48ad',
          borderWidth: 5
        }]
      },
      options: {
        maintainAspectRatio : false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }
  };

  render () {
    const { decks } = this.props;
    return (
      <View style={styles.container}>
        {decks && Object.keys(decks).map(deck => {
          return (
            <View style={styles.chartBox}>
              <Chart
                chartConfiguration={this.chartConfigurationReact(deck)}
                defaultFontSize={30}
              />
            </View>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  chartBox: {
    flex: 1,
    padding: 10,
    maxHeight: 150,
  }
});

const mapStateToProps = ({ decks, records }) => ({ decks, records });

export default connect(mapStateToProps)(Progress);
