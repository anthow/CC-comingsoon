import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
<>
    <Seo title="Home" />
    <h1>Un atelier pour créer, vivre et partager.</h1>
    <StaticImage
      src="../images/logo-titres.svg"
      width={500}
      quality={100}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />


<h2>Une boutique d'objets éthiques et durables</h2>
<p></p>
</>
)


export default IndexPage
