import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

const Score = ({ yTeam, wTeam }) => (
  <Row size={3}>
    <Col style={{
      backgroundColor: '#FBC02D',
      height: 200,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <Text style={{ color: '#673AB7', fontWeight: 'bold', fontSize: 80 }}>
        {yTeam.goals}
      </Text>
    </Col>
    <Col style={{
      backgroundColor: '#F5F5F5',
      height: 200,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <Text style={{ color: '#673AB7', fontWeight: 'bold', fontSize: 80 }}>
        {wTeam.goals}
      </Text>
    </Col>
  </Row>
);

// Specifies the default values for props:
Score.defaultProps = {
  yTeam: { goals: 2},
  wTeam: { goals: 3}
};

export default Score;
