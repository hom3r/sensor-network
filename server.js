'use strict';

// deps
const Hapi = require('@hapi/hapi');
const fs = require('fs');
const mongo = require('mongodb').MongoClient;

// local files
const config = require('./config');
const routes = require('./routes');

const server = Hapi.server({
    port: config.port || 3000,
    host: 'localhost'
});

server.route(routes);

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);


    // mongo.connect(config.mongoUrl, (err, client) => {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    //   db = client.db('network');
    //   console.log('Connected to MongoDB');
    // });
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
