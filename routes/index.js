'use strict';

const sensor = require('./sensor');

const routes = [
    {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
          return 'Sensor API<br>&nbsp;&nbsp;<a href="/sensor">/sensor</a>';
      }
    }
];

module.exports = routes.concat(sensor);
