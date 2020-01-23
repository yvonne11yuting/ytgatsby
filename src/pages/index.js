import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/common/Layout';
import SEO from '../components/seo';

const IndexPage = () => {
  const { coverImg } = useStaticQuery(graphql`
    query CoverImage {
      coverImg: file(relativePath: { eq: "cover_main.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <Img fluid={coverImg.childImageSharp.fluid} />
      <h1>Hi people</h1>
      <p>This is my personal website. I record some note in here.</p>
    </Layout>
  );
};

export default IndexPage;
