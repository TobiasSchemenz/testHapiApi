const Home = require('./handlers/home');
const Books = require('./handlers/books');

exports.register = (plugin, options, next) => {
    //const db = plugin.app.db;
    plugin.route([
        { method: 'GET', path: '/{apiVersion}', config: Home.hello },
        { method: 'GET', path: '/{apiVersion}/restricted', config: Home.restricted },
        { method: 'GET', path: '/{apiVersion}/{path*}', config: Home.notFound },
        { method: 'GET', path: '/{apiVersion}/books', config: Books.getBooks},
        { method: 'GET', path: '/{apiVersion}/books/{id}', config: Books.getBookById},
        { method: 'POST', path: '/{apiVersion}/books', config: Books.postBook},
        { method: 'PATCH', path: '/{apiVersion}/books/{id}', config: Books.patchBook},
        { method: 'DELETE', path: '/{apiVersion}/books/{id}', config: Books.deleteBook}
    ]);

    next();
};

exports.register.attributes = {
    name: 'api'
};
