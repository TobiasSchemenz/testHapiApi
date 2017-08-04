module.exports.hello = {
    handler: function (request, reply) {
        return reply({ result: ('Hello world!')});
    },
    description: 'Get a hello',
    notes: 'Returns a hello',
    tags: ['api','home']
};

module.exports.restricted = {
    auth: 'jwt',
    handler: function (request, reply) {
        return reply({ result: 'Restricted!1' });
    },
    description: 'Shows restricted page',
    notes: 'Shows restricted page',
    tags: ['api','home']
};

module.exports.notFound = {
    handler: function (request, reply) {
        return reply({ result: 'Oops, 404 Page!1' }).code(404);
    },
    description: '404',
    notes: 'Shows 404 return',
    tags: ['api','home']
};
