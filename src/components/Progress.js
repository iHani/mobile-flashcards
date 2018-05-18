import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Chart from 'react-native-chartjs';

const chartConfigurationReact = {
  type: 'line',
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: 'React',
      data: [4, 6, 10, 12, 10, 15],
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
};

const chartConfigurationJavaScript = {
  type: 'line',
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: 'JavaScript',
      data: [5, 5, 8, 5, 10, 15],
      backgroundColor: '#ffeac4',
      borderColor: '#ff9b59',
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
};

class Progress extends Component {

  state = {
    chartConfigurationReact: chartConfigurationReact,
    chartConfigurationJavaScript: chartConfigurationJavaScript
  };

  render () {
    const { state } = this.props;

    return (
      <View style={styles.container}>
        <View style={{ flex: 2 }}>
          <Text>actual quiz records from redux:</Text>
          <ScrollView>
            <Text style={{color: 'red'}}>{JSON.stringify(state.records, null, 2)}</Text>
          </ScrollView>
        </View>
        <Text>fake dataset #WIP</Text>

        { /* Charts */ }
        <View style={{ flex: 1, padding: 10 }}>
          <Chart chartConfiguration={
            // TODO configure chart data
            this.state.chartConfigurationReact
          }
          defaultFontSize={20}/>
        </View>
        <View style={{ flex: 1, padding: 10 }}>
          <Chart chartConfiguration={
            // TODO configure chart data
            this.state.chartConfigurationJavaScript
          }
          defaultFontSize={20}/>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
});

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(Progress);
