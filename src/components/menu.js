import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"




const Menu = () => {
    const { allFile } = useStaticQuery(
        graphql`
          query {
            allFile(filter:{absolutePath: {regex : "\/logo/"} }){
                edges{
                  node{
                    relativePath
                    childImageSharp{
                      fluid(maxWidth : 1600){
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                
              }
          }
        `
      )
    // console.log(allFile.edges)
    return(

<div className="header affix">
  <div className="table">
    <div className="table-cell">
      <div className="logo">
        <a href="index-2.html">
        <Img  fluid={allFile.edges[0].node.childImageSharp.fluid}  />
        <Img  fluid={allFile.edges[1].node.childImageSharp.fluid}  />
        </a>
      </div>

      <div className="main-menu">
        <nav>
          <ul className="menu-list">
            <li className="menu-item-has-children">
              <a href="index-2.html">Home</a>
              <ul className="sub-menu">
                <li>
                  <a href="index-2.html">Standard Layout</a>
                </li>
                <li>
                  <a href="index-grid.html">Grid Layout</a>
                </li>
                <li>
                  <a href="index-grid-1st-large.html">Grid 1st Large</a>
                </li>
                <li>
                  <a href="index-list.html">List Layout</a>
                </li>
                <li>
                  <a href="index-list-1st-large.html">List 1st Large</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="#">Lifestyle</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li className="menu-item-has-children">
            <Link to="/blog/">Blog</Link>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="socials">
        <a href="#" title="Behance">
          <i className="fa fa-behance" />
        </a>
        <a href="#" title="Dribbble">
          <i className="fa fa-dribbble" />
        </a>
        <a href="#" title="Facebook">
          <i className="fa fa-facebook" />
        </a>
        <a href="#" title="Google Plus">
          <i className="fa fa-google-plus" />
        </a>
        <a href="#" title="Instagram">
          <i className="fa fa-instagram" />
        </a>
        <a href="#" title="Search this site">
          <i className="fa fa-search" />
        </a>
      </div>
   
      <div className="box-search">
        <form role="search" method="get" action="#">
          <input type="text" placeholder="Search ..." name="s" />
        </form>
      </div>
      <div className="copyright">
        <p>
          Tancho @ 2018. Design by <a href="#">Kendy</a>
        </p>
      </div>
    </div>
  </div></div>
)
}




export default Menu