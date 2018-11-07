import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainView from './components/MainView';
import { updateScore, resetScore, connect } from './mqtt-connect';

const defaultState = {
  yTeam: {
    goals: 0,
    fetching: false,
  },
  wTeam: {
    goals: 0,
    fetching: false,
  },
};

export default class App extends React.Component {
  state = {
    ...defaultState
  };
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
  handleResetScore = () => {
    resetScore();
    this.setState({
      yTeam: {
        goals: 0,
        fetching: true,
      },
      wTeam: {
        goals: 0,
        fetching: true,
      },
    });
    setTimeout(() => {
        this.clearFetching('yTeam');
        this.clearFetching('wTeam');
    }, 3000);
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
        resetScore={this.handleResetScore}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
