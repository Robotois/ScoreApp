import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Button, Icon } from 'native-base';
import { Col, Row } from 'react-native-easy-grid';

const GoalButtons = ({ incrementScore, decrementScore, disabled }) => (
  <Col>
    <Row style={{ justifyContent: 'center' }}>
      <Button
        iconLeft
        rounded
        block
        success
        style={{ width: '65%', height: 80 }}
        onPress={incrementScore}
        disabled={disabled}
      >
        <Icon type="FontAwesome" name="plus-circle" style={{color: '#F5F5F5', fontSize: 35}} />
        <Text style={{color: '#F5F5F5', fontSize: 35, fontWeight: 'bold'}}> GOL!</Text>
      </Button>
    </Row>
    <Row style={{ justifyContent: 'center' }}>
      <Button
        iconLeft
        rounded
        block
        light
        style={{ width: '60%', height: 75 }}
        onPress={decrementScore}
        disabled={disabled}
      >
        <Icon type="FontAwesome" name="minus-circle" style={{color: '#E64A19', fontSize: 35}} />
        <Text style={{color: '#E64A19', fontSize: 30}}> Restar</Text>
      </Button>
    </Row>
  </Col>
);

export default GoalButtons;
