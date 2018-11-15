import React from 'react';
import { Text } from 'react-native';
import { Container, Header, Button, Icon, Badge } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';

import Score from './Score';
import GoalButtons from './GoalButtons';

const colors = {
  white: '#F5F5F5',
  red: '#FF5722',
  purple: '#673AB7',
};

const LayoutExample = ({
  yTeam,
  wTeam,
  updateScore,
  startScore,
  stopScore,
  time,
}) => (
  <Container>
    <Header transparent style={{ height: 35 }}/>
    <Grid>
      <Row size={1} style={{ justifyContent: 'center' }}>
        <Badge info style={{ width: '30%', height: 35, alignItems: 'center' }}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: colors.white }}>{time}</Text>
        </Badge>
      </Row>
      <Score yTeam={yTeam} wTeam={wTeam} />
      <Row size={4}>
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
      <Row size={1} style={{ justifyContent: 'space-evenly' }}>
        <Button
          iconLeft
          rounded
          block
          info
          onPress={startScore}
          style={{ width: '45%' }}
        >
          <Icon type="FontAwesome" name="play-circle" style={{color: colors.white, fontSize: 25 }} />
          <Text style={{color: colors.white, fontSize: 18, fontWeight: 'bold'}}> Nuevo Partido </Text>
        </Button>
        <Button
          iconLeft
          rounded
          block
          danger
          onPress={stopScore}
          style={{ width: '45%' }}
        >
          <Icon type="FontAwesome" name="stop-circle" style={{color: colors.white, fontSize: 20 }} />
          <Text style={{color: colors.white, fontSize: 15, fontWeight: 'bold'}}> DETENER!</Text>
        </Button>
      </Row>
    </Grid>
  </Container>
);

export default LayoutExample;