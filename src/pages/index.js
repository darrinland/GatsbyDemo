import React from "react"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import SEO from "../components/seo"
import style from "./index.module.scss"

const IndexPage = ({ data }) => {
  return (
    <div className={style.main}>
      <SEO title="Centeva Blog" />
      <h1>Centeva Blog</h1>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h2>
            <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
          </h2>
<Img fluid={node.frontmatter.avatar.childImageSharp.fluid} />
          <p>{node.frontmatter.author}</p>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  )
}

export default IndexPage

export const query = graphql`
{
  allMarkdownRemark {
    edges {
      node {
        excerpt
        frontmatter {
          author
          path
          title
          avatar {
            childImageSharp {
              fluid(maxWidth: 250) {
                aspectRatio
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  }
}
`