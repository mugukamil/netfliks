'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Store = require('./Store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Landing = function (_Component) {
    _inherits(Landing, _Component);

    function Landing() {
        _classCallCheck(this, Landing);

        return _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).apply(this, arguments));
    }

    _createClass(Landing, [{
        key: 'handleSearchTermEvent',
        value: function handleSearchTermEvent(event) {
            this.props.setSearchTerm(event.target.value);
        }
    }, {
        key: 'goToSearch',
        value: function goToSearch(event) {
            this.props.history.push('/search');
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'home-info' },
                _react2.default.createElement(
                    'h1',
                    { className: 'title' },
                    'NETFLIKS'
                ),
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.goToSearch.bind(this) },
                    _react2.default.createElement('input', { value: this.props.searchTerm, type: 'text', className: 'search', placeholder: 'Search', onChange: this.handleSearchTermEvent.bind(this) })
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/search', className: 'browse-all' },
                    'or Browse All'
                )
            );
        }
    }]);

    return Landing;
}(_react.Component);

exports.default = (0, _Store.connector)(Landing);