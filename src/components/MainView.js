import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Button, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Score from './Score';
import GoalButtons from './GoalButtons';

export default class LayoutExample extends Component {
  render() {
    const { yTeam, wTeam, updateScore, resetScore } = this.props;
    return (
      <Container>
        <Header />
        <Grid>
          <Score yTeam={yTeam} wTeam={wTeam} />
          <Row size={3}>
            <GoalButtons
              incrementScore={updateScore('yTeam', 1)}
              decrementScore={updateScore('yTeam', -1)}
              disabled={yTeam.fetching}
            />
            <GoalButtons
              incrementScore={updateScore('wTeam', 1)}
              decrementScore={updateScore('wTeam', -1)}
              disabled={wTeam.fetching}
            />
          </Row>
          <Row size={1} style={{ justifyContent: 'center' }}>
            <Button
              iconLeft
              rounded
              block
              light
              style={{ width: '60%' }}
              onPress={resetScore}
            >
              <Icon type="FontAwesome" name="play-circle" style={{color: '#0288D1', fontSize: 15}} />
              <Text style={{color: '#0288D1', fontSize: 15, fontWeight: 'bold'}}> Nuevo Partido!</Text>
            </Button>
          </Row>
        </Grid>
      </Container>
    );
  }
}
