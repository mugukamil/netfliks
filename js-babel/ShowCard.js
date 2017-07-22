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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowCard = function (_Component) {
    _inherits(ShowCard, _Component);

    function ShowCard() {
        _classCallCheck(this, ShowCard);

        return _possibleConstructorReturn(this, (ShowCard.__proto__ || Object.getPrototypeOf(ShowCard)).apply(this, arguments));
    }

    _createClass(ShowCard, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                poster = _props.poster,
                title = _props.title,
                year = _props.year,
                description = _props.description,
                imdbID = _props.imdbID;

            return _react2.default.createElement(
                _reactRouterDom.Link,
                { to: 'details/' + imdbID },
                _react2.default.createElement(
                    'div',
                    { className: 'show-card' },
                    _react2.default.createElement('img', { src: 'public/img/posters/' + poster, alt: title, className: 'show-card-img' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'show-card-text' },
                        _react2.default.createElement(
                            'h3',
                            { className: 'show-card-title' },
                            title
                        ),
                        _react2.default.createElement(
                            'h4',
                            { className: 'show-card-year' },
                            '(',
                            year,
                            ')'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'show-card-description' },
                            description
                        )
                    )
                )
            );
        }
    }]);

    return ShowCard;
}(_react.Component);

exports.default = ShowCard;
var string = _propTypes2.default.string;


ShowCard.propTypes = {
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired,
    poster: string.isRequired,
    imdbID: string.isRequired
};