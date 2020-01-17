import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./common/Layout"
import SEO from "../components/seo"

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <SEO title="blog content" />
      <h1>{mdx.frontmatter.title}12345</h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`