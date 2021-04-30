import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { HelmetDatoCms } from 'gatsby-source-datocms'

const IndexPage = ({ data }) => 
<h1>
  {data.allDatoCmsComingSoon.edges.node.titre}
</h1>


  
export const query = graphql`
  {
    allDatoCmsComingSoon {
      edges {
        node {
          logo {
            url
          }
          texte
          titre
          slogan
        }
      }
    }
  }
`
export default IndexPage
