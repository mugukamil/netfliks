import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import { connector } from './Store'

class Landing extends Component {
    handleSearchTermEvent(event) {
        this.props.setSearchTerm(event.target.value)
    }

    goToSearch(event) {
        this.props.history.push('/search')
        event.preventDefault()
    }

    render() {
        return (
            <div className="home-info">
                <h1 className="title">NETFLIKS</h1>
                <form onSubmit={this.goToSearch.bind(this)}>
                    <input value={this.props.searchTerm} type="text" className="search" placeholder="Search" onChange={this.handleSearchTermEvent.bind(this)} />
                </form>
                <Link to='/search' className="browse-all">or Browse All</Link>
            </div>
        )
    }
}

export default connector(Landing)
