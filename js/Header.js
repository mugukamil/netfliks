import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connector } from './Store'

class Header extends Component {
    handleSearchTermEvent(event) {
        this.props.setSearchTerm(event.target.value)
    }

    render() {
        let utilSpace

        if (this.props.showInput) {
            utilSpace = <input value={this.props.searchTerm} type="text" className="search-input" placeholder="Search" onChange={this.handleSearchTermEvent.bind(this)} />
        } else {
            utilSpace = (
                <h2 className="header-back">
                    <Link to="/search">Back</Link>
                </h2>
            )
        }

        return (
            <header className="header">
                <h1 className="brand">
                    <Link to="/" className="brand-link">NETFLIKS</Link>
                </h1>
                {utilSpace}
            </header>
        )
    }
}

const { func, bool, string } = PropTypes

Header.propTypes = {
    setSearchTerm: func,
    showInput: bool,
    searchTerm: string
}

export default connector(Header)
