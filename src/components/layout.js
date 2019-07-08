/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import "./css/styles.css"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
// import "./layout.css"

import "./css/libs/bootstrap.min.css"
import "./css/libs/font-awesome.min.css"
import Footer from './footer'
import Menu from './menu'

const Layout = ({ children }) => (
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
        <div className="home">
          <div id="main-content">


            <Header siteTitle={data.site.siteMetadata.title} />
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <Menu />
                </div>

                <div className="col-md-9 col-md-offset-3">
            <main>{children}</main>
            </div>
            </div>
               </div>
            <Footer />
          </div>

        </div>
      </>

    )}

  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
