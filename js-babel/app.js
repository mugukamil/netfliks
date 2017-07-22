'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouterDom = require('react-router-dom');

var _Store = require('./Store');

var _reactRedux = require('react-redux');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _Search = require('./Search');

var _Search2 = _interopRequireDefault(_Search);

var _Layout = require('./Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Details = require('./Details');

var _Details2 = _interopRequireDefault(_Details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Routes = function Routes() {
    return _react2.default.createElement(
        _Layout2.default,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _index2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/search', component: _Search2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/details/:id', component: _Details2.default })
    );
};

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRedux.Provider,
                { store: _Store.store },
                _react2.default.createElement(
                    _reactRouterDom.BrowserRouter,
                    null,
                    Routes()
                )
            );
        }
    }]);

    return App;
}(_react.Component);

App.Routes = Routes;

exports.default = App;