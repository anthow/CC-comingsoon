module.exports = {

  //  À MODIFIER POUR LE SEO !
  siteMetadata: {
    title: `Coccinelles et compagnies`,
    titleTemplate: "Coccinelles et compagnies",
    description: `Une boutique pour trouver des objets du quotidien traçables depuis la matière première, beaux, éthiques, durables.
    Un atelier pour créer, partager, rêver, transmettre, fabriquer dans la joie ! `,
    url: "https://coccinellesetcompagnies.com",
    image: "public/static/e5f7a245a0404e09a019f884f84f454f/1dfc8/logo-titres.webp", // Path to your image you placed in the 'static' folder
    author: `Coccinelles et compagnies`, 
    twitterUsername: '',
  },
  plugins: [

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Dancing Script`,
          `cursive\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
}
