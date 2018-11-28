import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import MainView from './components/MainView';
import { updateScore, startScore, connect, stopScore } from './mqtt-connect';

let initTime;
export default class App extends React.Component {
  state = {
    yTeam: {
      goals: 0,
      fetching: false,
    },
    wTeam: {
      goals: 0,
      fetching: false,
    },
    time: '00:00',
  };
  timerInterval = null;
  componentDidMount() {
    connect();
  }
  handleUpdateScore = (team, increment) => () => {
    const { goals } = this.state[team];
    const newGoal = increment == 1 ? goals + 1 : goals - 1;
    updateScore(team, increment);
    this.setState({
      [team]: {
        goals: newGoal >= 0 ? newGoal : 0,
        fetching: true,
      }
    });
    setTimeout(() => {
        this.clearFetching(team);
    }, 5000);
  }
  startTimer = () => {
    initTime = moment();
    this.timerInterval = setInterval(() => {
      const duration = moment(moment().diff(initTime));
      this.setState({ time: duration.format('mm:ss') });
    }, 1000);
  }

  handleStartScore = (start) => () => {
    if (start) {
      startScore();
    } else {
      stopScore();
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.setState({
      yTeam: {
        goals: 0,
        fetching: true,
      },
      wTeam: {
        goals: 0,
        fetching: true,
      },
      time: '00:00',
    });
    setTimeout(() => {
      if (start) {
        this.startTimer();
      }
      this.clearFetching('yTeam');
      this.clearFetching('wTeam');
    }, 4000);
  }

  clearFetching = (team) => {
    const teamObj = this.state[team];
    this.setState({
      [team]: {
        ...teamObj,
        fetching: false,
      }
    });
  }

  render() {
    return (
      <MainView
        {...this.state}
        updateScore={this.handleUpdateScore}
        startScore={this.handleStartScore(true)}
        stopScore={this.handleStartScore(false)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDBDBD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
