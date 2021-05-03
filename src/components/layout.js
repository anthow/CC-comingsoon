

import * as React from "react"
import PropTypes from "prop-types"
import Helmet from 'react-helmet'
import favicon from "../images/favicon.ico";
import "./layout.css"

const Layout = ({ children }) => {


  return (
    <>
        <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
        <main>{children}</main>
 
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
