import { createStore, compose } from 'redux'
import { connect } from 'react-redux'
import { shows } from '../public/data.json'

const SET_SEARCH_TERM = 'setSearchTerm'
const initialState = {
    searchTerm: '',
    shows
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_TERM:
            return reduceSearchTerm(state, action)
        default:
            return state
    }
}

const reduceSearchTerm = (state, action) => {
    const newState = {}

    Object.assign(newState, state, {searchTerm: action.value})

    return newState
}

const store = createStore(rootReducer, 
                          initialState, 
                          compose(
                                  typeof window === 'object' &&
                                  typeof window.devToolsExtension !== 'undefined' ?
                                  window.devToolsExtension() : f => f
                                  ))

const mapStateToProps = (state) => ({ 
    searchTerm: state.searchTerm,
    shows: state.shows
})

const mapDispatchToProps = (dispatch) => ({ 
    setSearchTerm(searchTerm) {
        dispatch({ 
            type: SET_SEARCH_TERM, 
            value: searchTerm 
        })
    } 
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export { connector, store, rootReducer }
