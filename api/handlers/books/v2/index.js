'use strict';

const Boom = require('boom');
const uuid = require('node-uuid');
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
    const db = request.server.app.db;
    db.books.findOne({
        _id: request.params.id
    }, (err, doc) => {
        if (err){
            return reply(Boom.wrap(err, 'Internal MongoDB error'));
        }
        if (!doc){
            return reply(Boom.notFound());
        }
        reply(doc);
    });
};

module.exports.postBook = function (request, reply) {
    const db = request.server.app.db;
    const book = request.payload;
    book._id = uuid.v1();

    db.books.save(book, (err, result) => {
        if (err){
            return reply(Boom.wrap(err, 'Internal MongoDB error'));
        }
        if (err){
            return result;
        }
        reply(book);

    });
};

module.exports.patchBook = function (request, reply) {
    const db = request.server.app.db;
    db.books.update({
        _id: request.params.id
    }, {
        $set: request.payload
    }, function (err, result) {
        if (err){
            return reply(Boom.wrap(err, 'Internal MongoDB error'));
        }
        if (result.n === 0){
            return reply(Boom.notFound());
        }

        reply().code(204);
    });
};

module.exports.deleteBook = function (request, reply) {
    const db = request.server.app.db;
    db.books.remove({
        _id: request.params.id
    }, function(err, result){
        if (err){
            return reply(Boom.wrap(err, 'Internal MongoDB error'));
        }
        if (result.n === 0){
            return reply(Boom.notFound());
        }
        reply().code(204);
    });
};