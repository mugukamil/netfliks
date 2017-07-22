'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _Store = require('./js-babel/Store');

var _app = require('./js-babel/app.js');

var _app2 = _interopRequireDefault(_app);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 5050;
var baseTemplate = _fs2.default.readFileSync('./index.html');
var template = _lodash2.default.template(baseTemplate);

var app = (0, _express2.default)();

console.log(_Store.store);

app.use('/public', _express2.default.static('./public'));

app.use(function (req, res) {
    var context = {};

    var body = _server2.default.renderToString(_react2.default.createElement(
        _reactRedux.Provider,
        { store: _Store.store },
        _react2.default.createElement(
            _reactRouter.StaticRouter,
            { location: req.url, context: context },
            _app2.default.Routes()
        )
    ));

    if (context.url) {
        res.writeHead(301, {
            Location: context.url
        });
        res.end();
    } else {
        res.status(200).send(template({ body: body }));
    }
});

app.listen(port, function () {
    return console.log('listening on port %s', port);
});
