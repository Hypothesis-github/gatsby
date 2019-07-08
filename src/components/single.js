import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from './layout'
import SEO from './seo'
import { object } from 'prop-types';
// import Image from './image'
// import SingleImage from "../images/single.jpg"

const Single = (props) => {

  const post = props.data.single.edges[0]
  const { nodes: similar } = props.data.similar
  const { pageContext } = props
  const { slug, cockpidate, next, previous } = pageContext
  const tags = post.node.Association.value.split(',');
  const comments = post.node.Comment.value.data.people
  const commentImageData = props.data.commentImage.childImageSharp.fluid

  // console.log(comments)

  const prevShow = () => {
    if (previous) {
      return (
        <div className="older">
          <a href="#" title="The living room is too small">Prev Post <i className="fa fa-angle-double-right" /></a>
          <h2 className="title">

            <Link style={{ boxShadow: 'none' }} to={`/blog/${previous.Name.value}`}>{previous.Name.value}</Link>


          </h2>
        </div>
      )
    }
  }
  const nextShow = () => {
    if (next) {
      return (
        <div className="newer">
          <a href="#" title="They have originality "><i className="fa fa-angle-double-left" /> Next Post</a>
          <h2 className="title">

            <Link style={{ boxShadow: 'none' }} to={`/blog/${next.Name.value}`}>{next.Name.value}</Link>
          </h2>
        </div>
      )
    }
  }
  const relatedPosts = () => {

    return (
      similar.map((x, i) => {
        // console.log(x.Image.value.publicURL)
        return (

          <div key={i + 1} className="col-sm-6">
            <div className="post">
              <div className="post-media" style={{ backgroundImage: `url(${x.Image.value.publicURL})`, backgroundSize: 'contain' }}>
                <a href="single.html">
                  <img src="images/posts/2.jpg" alt="Image" />
                </a>
              </div>
              <div className="post-entry">
                <h3 className="title">
                  <Link style={{ boxShadow: 'none' }} to={`/blog/${x.Name.value}`}>{x.Name.value}</Link>
                  {/* <a href="single.html"> {x.Name.value} </a> */}
                </h3>
                <div className="post-details">
                  {x.Name.value}
                </div>
              </div>
            </div>
          </div>

        )
      })

    )

  }

  const downComments = () => {

    return (
      comments.map((com) => {
        return(
          Object.keys(com).map((y,i)=>{
            console.log(com[y])
            return (
              <li key={i} className="comment">
                <div className="comment-body">
                  <div className="comment-head">
                    <div className="comment-avatar">
                      <Img fluid={commentImageData} />
                    </div>
                    <div className="comment-info">
                      <h5 className="title">{y}</h5>
                      <span className="comment-date">Aug 06, 2018</span>
                    </div>
                  </div>
    
                  <div className="comment-context">
                    <p>{com[y]}</p>
                    {/* <div className="reply">
                      <span className="comment-reply"><a className="comment-reply-link" href="#">Reply</a></span>
                    </div> */}
                  </div>
                </div>
                {/* <ul className="children">
                <li className="comment">
                  <div className="comment-body">
                    <div className="comment-head">
                      <div className="comment-avatar">
                        <img alt="avatar" src="images/avatar.jpg" />
                      </div>
                      <div className="comment-info">
                        <h5 className="title">KENDY</h5>
                        <span className="comment-date">Aug 06, 2018</span>
                      </div>
                    </div>
                    <div className="comment-context">
                      <p>Design works within constraints. The Columban monks who crafted the Book</p>
                      <div className="reply">
                        <span className="comment-reply"><a className="comment-reply-link" href="#">Reply</a></span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul> */}
              </li>
            )
          })
        )
        
      })
    )

  }

  return (
    <Layout >
      <div className="posts">
        <div className="posts-inner">
          <article className="post">
            <div className="post-header">
              <h2 className="title"><span>{post.node.Name.value}</span></h2>

              <div className="post-details">
                <div className="post-cat">
                  {/* <a href="#">{post.node.Association.value}</a> */}

                </div>
                <a href="#" className="post-date"><span>{cockpidate}</span></a>
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

            </div>
            <div className="post-media">
              <Img fluid={post.node.Image.value.childImageSharp.fluid} alt="Post" />

              {/* <img src={SingleImage} alt="Post" /> */}
            </div>
            <div className="post-content">

              <div className="the-excerpt">
                <div dangerouslySetInnerHTML={{ __html: post.node.Description.value }} />
              </div>

              <div className="post-tags">
                <strong>Tags: </strong>
                <ul>
                  {
                    tags.map((x, i) => <li key={i}><a href="#">{x}</a></li>)
                  }
                  {/* <li><a href="#">Art</a></li>
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Trip</a></li>
                  <li><a href="#">Tip</a></li> */}
                </ul>
              </div>
              <div className="post-author">
                Writed by  <a href="#">Kendy</a>
              </div>
            </div>
          </article>
        </div>

        <div className="pagination-wrap">

          {
            prevShow()
          }

          {
            nextShow()
          }
        </div>

        <div id="related-posts">
          <h2 className="title"><span>Related Posts</span></h2>
          <div className="row">

            {relatedPosts()}
          </div>
        </div>

        <div className="author-box">
          <div className="header-top clearfix">
            <div className="avatar-author">
              <img src="images/avatar.jpg" alt="Avatar" />
            </div>
            <div className="author-name">
              <h3 className="title">
                <a href="#">Kendy</a>
              </h3>
              <div className="author-socials">
                <a href="#" className="fa fa-behance" title="Behance" />
                <a href="#" className="fa fa-dribbble" title="Dribbble" />
                <a href="#" className="fa fa-facebook" title="Facebook" />
                <a href="#" className="fa fa-google" title="Google Plus" />
                <a href="#" className="fa fa-twitter" title="Twitter" />
              </div>
            </div>
          </div>
          <div className="author-description">
            Kendy loves beautiful content and doesn't like to give in easily. I run responsive Web design workshops, online workshops and loves solving complex UX, front-end and performance problems in large companies.
      <a href="#">Get in touch.</a>
          </div>
        </div>

        <div id="comments">
          <h2 className="title"><span>{comments.length} Comments</span></h2>
          <div className="comments-inner">
            <ul className="comment-list">

              {downComments()}
            </ul>
          </div>

          <div id="respond" className="comment-respond">
            <h2 className="title"><span>Leave a Reply</span></h2>
            <form action="#" method="post" className="contact">
              <div className="contact-item">
                <label>Your Name *</label>
                <input name="author" defaultValue type="text" />
              </div>
              <div className="contact-item">
                <label>Your Email *</label>
                <input name="email" defaultValue type="email" />
              </div>
              <div className="contact-item">
                <label>Website URL</label>
                <input id="url" name="url" defaultValue type="text" />
              </div>
              <div className="contact-item">
                <label>Your Comment *</label>
                <textarea name="comment" defaultValue={""} />
              </div>
              <div className="contact-item form-submit">
                <input name="submit" type="submit" id="submit" className="submit" defaultValue="Submit" />
              </div>
            </form>
          </div>

        </div>

      </div>
    </Layout>
  )
}


export default Single

export const query = graphql`
query cockpitHe4($slug: String!) {
   single : allCockpitHello(filter: {Name: {value: {eq: $slug}}}) {
    edges {
      node {
        cockpitCreated
        Description{
          value
        }
        Image {
            value {
                publicURL
                childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
            }
          }
        Name {
          value
        }
        Association {
          value
        }
        Comment {
          value {
            data
          }
        }

      }

      }
    }
   similar : allCockpitHello (filter: {Association : {value : {regex: "\/cute/" }}} limit:2){
      nodes{
  
        Name{
          value
        }
        Association {
          value
        }


        Image {
          value {
              publicURL
              childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
          }
        }
      }
        
    }

    commentImage: file(relativePath: { eq: "Comment.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
  
}`