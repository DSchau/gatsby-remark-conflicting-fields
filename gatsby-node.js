const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = function onCreateNode({ actions: { createNodeField }, node, getNode }) {
  switch (node.internal.type) {
    case 'MarkdownRemark':
      const slug = createFilePath({
        node,
        getNode,
        basePath: path.join(__dirname, 'content')
      })

      createNodeField({
        node,
        name: 'slug',
        value: slug
      })
    default:
      return;
  }
}

// You can delete this file if you're not using it
exports.createPages = async function createPages({ actions: { createPage }, graphql }) {
  const result = await graphql(`
    query GetAllPages {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
    .then(res => res.data)

  const template = path.resolve('src/templates/markdown-post.js')

  result.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug } = node.fields
    createPage({
      path: slug,
      component: template,
      context: {
        slug
      }
    })
  })
}
