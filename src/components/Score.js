import React from 'react';
import { Text } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';

const Score = ({ yTeam, wTeam }) => (
  <Row size={4}>
    <Col
      style={{
        backgroundColor: '#FBC02D',
        height: 250,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: '#673AB7', fontWeight: 'bold', fontSize: 140 }}>
        {yTeam.goals}
      </Text>
    </Col>
    <Col
      style={{
        backgroundColor: '#F5F5F5',
        height: 250,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: '#673AB7', fontWeight: 'bold', fontSize: 140 }}>
        {wTeam.goals}
      </Text>
    </Col>
  </Row>
);

// Specifies the default values for props:
Score.defaultProps = {
  yTeam: { goals: 2 },
  wTeam: { goals: 3 }
};

export default Score;
