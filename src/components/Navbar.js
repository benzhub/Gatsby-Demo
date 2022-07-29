import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Navbar() {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const { title } = data.site.siteMetadata

    return (
        <nav>
            <h1>{ title }</h1>
            <div className="links">
                <Link to="/Gatsby-Demo/">Home</Link>
                <Link to="/Gatsby-Demo/about">About</Link>
                <Link to="/Gatsby-Demo/projects">Portfolio Projects</Link>
            </div>
        </nav>
    )
}
