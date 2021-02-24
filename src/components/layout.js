import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./elements/header"
import Footer from "./elements/footer"
import "../../static/styles/main.scss"

const Layout = ({ children }) => (
  <>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Footer siteTitle={data.site.siteMetadata.title} />
        </>
      )}
    />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
