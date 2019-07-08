import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/image'

const IndexPage = (props) => {
  const post = props.data.allCockpitHello.edges[0]
  // console.log(post.node.Image)
  return (
    <Layout>
      <div className="posts">
        <div className="posts-inner">
          <div className="post">
            <div className="post-header">
              <h2 className="title">
                <a href="single.html">Creativity is more than a song and dance act</a>
              </h2>


              <div className="post-details">
                <div className="post-cat">
                  <a href="#">Travel</a>
                </div>
                <a href="#" className="post-date"><span>Aug 06, 2018</span></a>
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
                <h1>Hi people</h1>
                <p>Welcome to your new Gatsby site.</p>
                <p>Now go build something great.</p>
                <div className="post-media">
                  <Img fluid={post.node.Image.value.childImageSharp.fluid} />
                </div>
                <Link to="/page-2/">Go to page 2</Link>


              </div>
            </div>
            <div className="read-more">
  <a href="single.html">Continue Reading ...</a>
</div>

          </div>
        </div>
      </div>
    </Layout>
  )
}



export const query = graphql`
query cockpitHe2 {


  allCockpitHello(filter: {Name: {value: {eq: "Ivy"}}}) {
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
      Description {
        value
      }
    }
  }
}



}`






export default IndexPage



// imageAsked : allFile(filter:{sourceInstanceName : {eq : "images"} }){
//   edges{
//     node{
//       relativePath
//       childImageSharp{
//         fluid(maxWidth : 1600){
//          ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
  
// }
