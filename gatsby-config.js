module.exports = {

  siteMetadata: {
    title: 'Gatsby Is Awesome!',
    author: 'Péter Gyarmati'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark'
  ]
}
