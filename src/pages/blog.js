import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/image'

const Blog = (props) => {
  const data = props.data.allCockpitHello.edges
  // console.log(props.data.allCockpitHello)
  const { currentPage, numPages, length } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  const generateblog = () => {
    console.log(length)
    return data.map(({ node }, i) => {
      const data = new Date(node.cockpitCreated);
      const event = new Intl.DateTimeFormat("default", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }).format(data);
      return (

        <div key={i} className="posts-inner">
          <div className="post">
            <div className="post-header">
              <h2 className="title">
                <Link style={{ boxShadow: 'none' }} to={`/blog/${node.Name.value}`}>{node.Name.value}</Link>
              </h2>


              <div className="post-details">
                <div className="post-cat">
                  <a href="#">Travel</a>
                </div>
                <a href="#" className="post-date"><span>{event.toString("yyyyMM")}</span></a>
                <div className="post-details-child">
                  <a href="#" className="post-views">15 views</a>
                  <a href="#" className="post-comments">03 Comments</a>
                  <div className="post-share-icon">
                    <span>SHARE</span>
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook" /><span>Facebook</span></a></li>
                      <li><a href="#"><i className="fa fa-google" /><span>Google Plus</span></a></li>
                      <li><a href="#"><i className="fa fa-twitter" /><span>Twitter</span></a></li>
                      <li><a href="#"><i className="fa fa-behance" /><span>Behance</span></a></li>
                      <li><a href="#"><i className="fa fa-dribbble" /><span>Dribbble</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>




              <div className="post-details">
                <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

                <div className="post-media">
                  <Img fluid={node.Image.value.childImageSharp.fluid} />
                </div>
                <div className="the-excerpt">

                  <p dangerouslySetInnerHTML={{ __html: node.Description.value }} />
                </div>
                <Link to="/page-2/">Go to page 2</Link>


              </div>
            </div>
            <div className="read-more">
              <a href="single.html">Continue Reading ...</a>
            </div>

          </div>
        </div>


      )
    })
  }

  return (
    <Layout>
      <div className="posts">
        {generateblog()}
        <div className="pagination-wrap">
          <div className="older">
            {!isLast && (
              <Link to={`/blog/${nextPage}`} rel="next">
                Newer Posts →
              </Link>
            )}
          </div>
          <div className="newer">
            {!isFirst && (
              <Link to={`/blog/${prevPage}`} rel="prev">
              ← Older Posts
              </Link>
            )}
          </div>

        </div>
      </div>
    </Layout>
  )

}








export default Blog



export const query1 = () => graphql`
query cockpitHe22($skip: Int!, $limit: Int!) {
  allCockpitHello(limit: $limit skip: $skip) {
    edges {
      node {
        Image{
            value{
              publicURL 
              childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
          }
        }
        Description{
          value
        }
        Name {
          value
        }
        cockpitCreated
      }
    }
  }
}`




