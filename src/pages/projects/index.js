import React from "react";
import Layout from "../../components/Layout";
import * as styles from '../../styles/projects.module.css'
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image'

const index = ({data}) => {
  const projects = data.projects.nodes
  const contactInfo = data.contact.siteMetadata.contact
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {projects && projects.map(project => (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid}/>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at { contactInfo } for a quote!</p>
      </div>
    </Layout>
  );
};

export default index;

// export page query
export const query = graphql`
  query MyQuery {
    projects: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`