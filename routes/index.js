'use strict';

const sensor = require('./sensor');

const routes = [
    {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
          return 'Sensor API root (visit /sensor)';
      }
    }
];

module.exports = routes.concat(sensor);
