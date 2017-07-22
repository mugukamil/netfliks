import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class ShowCard extends Component {
    render() {
        const { poster, title, year, description, imdbID } = this.props
        return (
            <Link to={`details/${imdbID}`}>
                <div className="show-card">
                    <img src={`public/img/posters/${poster}`} alt={title} className="show-card-img"/>
                    <div className="show-card-text">
                      <h3 className="show-card-title">{title}</h3>
                      <h4 className="show-card-year">({year})</h4>
                      <p className="show-card-description">{description}</p>
                    </div>
                </div>
            </Link>
        )
    }
}

const { string } = PropTypes

ShowCard.propTypes = {
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired,
    poster: string.isRequired,
    imdbID: string.isRequired
}
