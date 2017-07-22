import React from 'react'
import PropTypes from 'prop-types'

const Layout = (props) => (
  <div className="app-container">
    {props.children}
  </div>
)

// const { object } = PropTypes

// Layout.propTypes = {
//   children: object 
// }

export default Layout
