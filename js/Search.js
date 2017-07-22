import React, {Component} from 'react'
import ShowCard from './ShowCard'
import Header from './Header'
import { connector } from './Store'

class Search extends Component {
    render() {
        return (
            <div className="container">
                <Header showInput />
            <div className="shows">
                {this.props.shows
                    .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
                    .map(show => <ShowCard {...show} key={show.imdbID} />)}
                </div>
            </div>
        )
    }
}

export default connector(Search)
