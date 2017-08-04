const Joi = require('joi');
module.exports.getBooks = {
    handler: function (request, reply) {
        if(request.params.apiVersion && (/^v[0-9]+$/).test(request.params.apiVersion)){
            return require('./books/'+request.params.apiVersion).getBooks(request, reply);
        }

        return require('./books/v2').getBooks(request, reply);
    },
    description: 'Get all books',
    notes: 'Returns a Json object with all books in the mongoDB',
    tags: ['api','books']
};
module.exports.getBookById = {
    handler: function (request, reply) {
        if(request.params.apiVersion && (/^v[0-9]+$/).test(request.params.apiVersion)){
            return require('./books/'+request.params.apiVersion).getBookById(request, reply);
        }

        return require('./books/v2').getBookById(request, reply);
    },
    description: 'Get a book',
    notes: 'Returns a book by the id passed in the path',
    tags: ['api','books']
};
module.exports.postBook = {
    handler: function (request, reply) {
        if(request.params.apiVersion && (/^v[0-9]+$/).test(request.params.apiVersion)){
            return require('./books/'+request.params.apiVersion).postBook(request, reply);
        }

        return require('./books/v2').postBook(request, reply);
    },
    description: 'Add a book',
    notes: 'Add a book to the database',
    tags: ['api','books'],
    validate: {
        payload: {
            title: Joi.string().min(10).max(50).required(),
            author: Joi.string().min(10).max(50).required(),
            isbn: Joi.number()
        }
    }
};
module.exports.patchBook = {
    handler: function (request, reply) {
        if(request.params.apiVersion && (/^v[0-9]+$/).test(request.params.apiVersion)){
            return require('./books/'+request.params.apiVersion).patchBook(request, reply);
        }

        return require('./books/v2').patchBook(request, reply);
    },
    description: 'Updates a book',
    notes: 'Updates a book in the database by id in the path',
    tags: ['api','books']
};
module.exports.deleteBook = {
    handler: function (request, reply) {
        if(request.params.apiVersion && (/^v[0-9]+$/).test(request.params.apiVersion)){
            return require('./books/'+request.params.apiVersion).deleteBook(request, reply);
        }

        return require('./books/v2').deleteBook(request, reply);
    },
    description: 'Delete a book',
    notes: 'Delete a book by the id passed in the path',
    tags: ['api','books']
};