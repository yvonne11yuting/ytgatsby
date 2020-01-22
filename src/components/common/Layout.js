/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import GlobalStyle from './Global.style'
import { LayoutContent, CoverImg } from './Layout.style';
import Header from "./Header";

const Layout = ({ children }) => {
  const { site, coverImg } = useStaticQuery(graphql`
    query CoverImageAndSiteTitleQuery {
      coverImg: file(relativePath: { eq: "cover_main.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <GlobalStyle/>
      <Header siteTitle={site.siteMetadata.title} />
      <CoverImg><Img fluid={coverImg.childImageSharp.fluid}/></CoverImg>
      <LayoutContent>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </LayoutContent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
