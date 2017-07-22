'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ShowCard = require('./ShowCard');

var _ShowCard2 = _interopRequireDefault(_ShowCard);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Store = require('./Store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_Component) {
    _inherits(Search, _Component);

    function Search() {
        _classCallCheck(this, Search);

        return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
    }

    _createClass(Search, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(_Header2.default, { showInput: true }),
                _react2.default.createElement(
                    'div',
                    { className: 'shows' },
                    this.props.shows.filter(function (show) {
                        return (show.title + ' ' + show.description).toUpperCase().indexOf(_this2.props.searchTerm.toUpperCase()) >= 0;
                    }).map(function (show) {
                        return _react2.default.createElement(_ShowCard2.default, _extends({}, show, { key: show.imdbID }));
                    })
                )
            );
        }
    }]);

    return Search;
}(_react.Component);

exports.default = (0, _Store.connector)(Search);