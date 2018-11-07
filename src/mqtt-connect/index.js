import mqtt from 'mqtt/dist/mqtt-browser';
import { IP } from './constants';

let client;
const tabletId = `ScoreApp-${Expo.Constants.deviceId}` || 'ScoreApp-01';
const scoreTopic = 'score-boards';
const teams = {
  yTeam: 'yellow',
  wTeam: 'white',
};

const connect = () => {
  client = mqtt.connect(
    `ws://${IP}:1884`,
    { clientId: tabletId },
  );
  client.on('connect', () => {
    console.log('SoccerApp connected!');
  });
};

const updateScore = (team, increment) => {
  client.publish(
    `${scoreTopic}/${teams[team]}`,
    JSON.stringify({ action: 'goal', increment }),
  );
}

const resetScore = () => {
  client.publish(
    `${scoreTopic}/yellow`,
    JSON.stringify({ action: 'start' }),
  );
  client.publish(
    `${scoreTopic}/white`,
    JSON.stringify({ action: 'start' }),
  );
}

export {
  connect,
  updateScore,
  resetScore,
}
