/* blogTemplate.js */

import React from "react"
import Img from 'gatsby-image'
import { graphql } from "gatsby"
import style from "./index.module.scss"

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <article className={style.blog}>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <Img fluid={frontmatter.avatar.childImageSharp.fluid} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
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
`