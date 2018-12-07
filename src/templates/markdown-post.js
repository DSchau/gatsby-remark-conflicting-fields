import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

function MarkdownPost({ data }) {
  const { markdown } = data
  return (
    <Layout>
      <h1>{markdown.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdown.html }} />
    </Layout>
  )
}

export default MarkdownPost

export const markdownQuery = graphql`
  query MarkdownBySlug($slug: String!) {
    markdown:markdownRemark(fields: { slug: { eq: $slug }}) {
      frontmatter {
        title
      }
      html
    }
  }
`