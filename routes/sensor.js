'use strict';

const sensor = require('../services/sensor');

// TODO move logic to a model
module.exports = [
  { method: 'GET', path: '/sensor', handler: sensor.list },
  { method: 'GET', path: '/sensor/{id}', handler: sensor.getOne },
  // { method: 'POST', path: '/sensor/{id}', handler: sensor.createEntry },
];
