import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ShowCard from './ShowCard'
import Header from './Header'
import { connector } from './Store'
import axios from 'axios'

class Details extends Component {
    assignShow(id) {
        const showArray = this.props.shows.filter(show => show.imdbID === id)

        return showArray[0]
    }

    render() {
        const {title, description, year, poster, trailer} = this.assignShow(this.props.match.params.id)

        return (
            <div className="container">
                <Header></Header>

                <div className="video-info">
                    <h1 className="video-title">{title}</h1>
                    <h2 className="video-year">({year})</h2>
                    <img src={`/public/img/posters/${poster}`} alt="" className="video-poster"/>
                    <p className="video-description">{description}</p>
                </div>
                <div className="video-container">
                    <iframe src={`https://youtube.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder="0"></iframe>
                </div>
            </div>
        )
    }
}

const { arrayOf, object } = PropTypes

Details.propTypes = {
  shows: arrayOf(object).isRequired
}

export default connector(Details)
