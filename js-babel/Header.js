'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Store = require('./Store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'handleSearchTermEvent',
        value: function handleSearchTermEvent(event) {
            this.props.setSearchTerm(event.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var utilSpace = void 0;

            if (this.props.showInput) {
                utilSpace = _react2.default.createElement('input', { value: this.props.searchTerm, type: 'text', className: 'search-input', placeholder: 'Search', onChange: this.handleSearchTermEvent.bind(this) });
            } else {
                utilSpace = _react2.default.createElement(
                    'h2',
                    { className: 'header-back' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/search' },
                        'Back'
                    )
                );
            }

            return _react2.default.createElement(
                'header',
                { className: 'header' },
                _react2.default.createElement(
                    'h1',
                    { className: 'brand' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/', className: 'brand-link' },
                        'NETFLIKS'
                    )
                ),
                utilSpace
            );
        }
    }]);

    return Header;
}(_react.Component);

var func = _propTypes2.default.func,
    bool = _propTypes2.default.bool,
    string = _propTypes2.default.string;


Header.propTypes = {
    setSearchTerm: func,
    showInput: bool,
    searchTerm: string
};

exports.default = (0, _Store.connector)(Header);