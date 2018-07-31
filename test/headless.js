// Configura tus test para usarlos
global.window = global;
global.assert = require('chai').assert;
global.fixtures = {
  users: require('../firebase.json'),
};
require('../src/firebase.json');
require('./data.spec.js');