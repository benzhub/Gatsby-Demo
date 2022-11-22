import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import * as styles from '../styles/project-details.module.css'
import { graphql } from 'gatsby'

const ProjectDetails = ({data}) => {
    const { html } = data.markdownRemark
    const { title, stack, thumb } = data.markdownRemark.frontmatter
    // console.log(title)
    // console.log(stack)
    // console.log(thumb.childrenImageSharp[0].fluid)
  return (
    <Layout>
        <div className={styles.details}>
            <h2>{title}</h2>
            <h3>{stack}</h3>
            <div className={styles.featured}>
                <Img fluid={thumb.childrenImageSharp[0].fluid}/>
            </div>
            <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }}/>
        </div>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
    query ProjectsDetailsPage($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
            stack
            title
            thumb {
                childrenImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        }
    }
`