'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rootReducer = exports.store = exports.connector = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _data = require('../public/data.json');

var SET_SEARCH_TERM = 'setSearchTerm';
var initialState = {
    searchTerm: '',
    shows: _data.shows
};

var rootReducer = function rootReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case SET_SEARCH_TERM:
            return reduceSearchTerm(state, action);
        default:
            return state;
    }
};

var reduceSearchTerm = function reduceSearchTerm(state, action) {
    var newState = {};

    Object.assign(newState, state, { searchTerm: action.value });

    return newState;
};

var store = (0, _redux.createStore)(rootReducer, initialState, (0, _redux.compose)((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : function (f) {
    return f;
}));

var mapStateToProps = function mapStateToProps(state) {
    return {
        searchTerm: state.searchTerm,
        shows: state.shows
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        setSearchTerm: function setSearchTerm(searchTerm) {
            dispatch({
                type: SET_SEARCH_TERM,
                value: searchTerm
            });
        }
    };
};

var connector = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);

exports.connector = connector;
exports.store = store;
exports.rootReducer = rootReducer;