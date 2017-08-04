'use strict';

/* global process, __dirname */
/* eslint-disable no-alert, no-console */

const Glue = require('glue');
const manifest = require('./config/manifest');
const mongojs = require('mongojs');


if (!process.env.PRODUCTION) {
    manifest.registrations.push({
        'plugin': {
            'register': 'blipp',
            'options': {}
        }
    });
}

Glue.compose(manifest, { relativeTo: __dirname }, (err, server) => {
    if (err) {
        console.log('server.register err:', err);
    }
    server.app.db = mongojs('hapi-rest-mongo',['books']);
    server.start(() => {
        console.log('✅  Server is listening on ' + server.info.uri.toLowerCase());
    });
});
