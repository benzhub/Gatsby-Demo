import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

export default function Home({data}) {
  console.log(data.file.childImageSharp.fluid)
  const homeImg = data.file.childImageSharp.fluid
  return (
    <Layout>  
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester .</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <Img fluid={homeImg}/>
      </section>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    id
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`