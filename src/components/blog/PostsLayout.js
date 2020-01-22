import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../common/Layout"
import SEO from "../seo"
import { MdxStyles } from './PostsLayout.style'
import Img from "gatsby-image"

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <SEO title="blog content" />
      <Img fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid} />
      <MdxStyles>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.body}</MDXRenderer></MdxStyles>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title,
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`