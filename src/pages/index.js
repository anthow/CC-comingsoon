import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
<>
    <Seo title="Home" />
    <hr class="gradient2"></hr>
    <div class="bloc">  <h1 class="orange center">Un atelier pour créer, vivre et partager.</h1>
    <div class="image">
    <StaticImage
      src="../images/logo-titres.svg"
      width={500}
      quality={100}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /></div>


<h2 class="blue center">Une boutique d'objets éthiques et durables.</h2>
<p></p></div>
<hr class="gradient"></hr>
<h3 class="bordeau center">Bientôt en ligne !</h3>
</>
)


export default IndexPage
