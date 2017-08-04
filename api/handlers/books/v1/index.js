'use strict';

const Boom = require('boom');
//const Joi = require('joi');


module.exports.getBooks = function (request, reply) {
    const db = request.server.app.db;
    db.books.find((err,docs) => {
        if (err){
            return reply(Boom.wrap(err, 'Internal MongoDB error'));
        }
        reply(docs);
    });
};

module.exports.getBookById = function (request, reply) {
    return reply({ result: 'Oops, not implemented yet' }).code(404);
};

module.exports.postBook = function (request, reply) {
    return reply({ result: 'Oops, not implemented yet' }).code(404);
};

module.exports.patchBook = function (request, reply) {
    return reply({ result: 'Oops, not implemented yet' }).code(404);
};

module.exports.deleteBook = function (request, reply) {
    return reply({ result: 'Oops, not implemented yet' }).code(404);
};