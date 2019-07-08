const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        ` {
          allCockpitHello {
            edges {
              node {
                cockpitCreated
                Name {
                  value
                }
              }
            }
          }
        }
      `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allCockpitHello.edges
        
        posts.forEach((post, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node
          const date = post.node.cockpitCreated.slice(0, 10)

          
          
          createPage({
            path: `/blog/${post.node.Name.value}`,
            component: path.resolve(`./src/components/single.js`),
            context: {
              slug: post.node.Name.value,
              cockpidate:date,
              previous,
              next,
            },
          })
        })

        // Create blog-list pages

        const postsPerPage = 3
        
        const numPages = Math.ceil(posts.length / postsPerPage)
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve("./src/pages/blog.js"),
            context: {
              length : posts.length,
              limit: postsPerPage,
              skip: i * postsPerPage,
              currentPage: i + 1,
              numPages
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `allCockpitHello`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}