import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import Seo from "../components/seo"
import Layout from"../components/layout"
const IndexPage = () => (
<>
<Layout>
    <Seo title="Home" />
    <Helmet>
          <meta charSet="utf-8" />
          <title>Coccinelles et compagnies </title>
          <link rel="canonical" href="http://coccinellesetcompagnies.com" />
        </Helmet>
    <hr class="gradient2"></hr>
    <div class="bloc">  <h1 class="orange center">Un atelier pour créer, vivre et partager.</h1>
    <div class="image">
      <figure>
    <StaticImage
      src="../images/logo-titres.svg"
      width={400}
      quality={100}
      alt="Logo Coccinelles et compagnies"
      style={{ marginBottom: `1.45rem` }}

    />
     <figcaption class="hidden"> A  completer par une légende expliquant le logo du magasin</figcaption>
    </figure>
    </div>


<h2 class="blue center">Une boutique d'objets éthiques et durables.</h2>
<p></p></div>
<hr class="gradient"></hr>
<h3 class="bordeau center">Bientôt en ligne !</h3>
</Layout>
</>
)


export default IndexPage
