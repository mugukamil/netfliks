'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ShowCard = require('./ShowCard');

var _ShowCard2 = _interopRequireDefault(_ShowCard);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Store = require('./Store');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Details = function (_Component) {
    _inherits(Details, _Component);

    function Details() {
        _classCallCheck(this, Details);

        return _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).apply(this, arguments));
    }

    _createClass(Details, [{
        key: 'assignShow',
        value: function assignShow(id) {
            var showArray = this.props.shows.filter(function (show) {
                return show.imdbID === id;
            });

            return showArray[0];
        }
    }, {
        key: 'render',
        value: function render() {
            var _assignShow = this.assignShow(this.props.match.params.id),
                title = _assignShow.title,
                description = _assignShow.description,
                year = _assignShow.year,
                poster = _assignShow.poster,
                trailer = _assignShow.trailer;

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'video-info' },
                    _react2.default.createElement(
                        'h1',
                        { className: 'video-title' },
                        title
                    ),
                    _react2.default.createElement(
                        'h2',
                        { className: 'video-year' },
                        '(',
                        year,
                        ')'
                    ),
                    _react2.default.createElement('img', { src: '/public/img/posters/' + poster, alt: '', className: 'video-poster' }),
                    _react2.default.createElement(
                        'p',
                        { className: 'video-description' },
                        description
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'video-container' },
                    _react2.default.createElement('iframe', { src: 'https://youtube.com/embed/' + trailer + '?rel=0&amp;controls=0&amp;showinfo=0', frameBorder: '0' })
                )
            );
        }
    }]);

    return Details;
}(_react.Component);

var arrayOf = _propTypes2.default.arrayOf,
    object = _propTypes2.default.object;


Details.propTypes = {
    shows: arrayOf(object).isRequired
};

exports.default = (0, _Store.connector)(Details);