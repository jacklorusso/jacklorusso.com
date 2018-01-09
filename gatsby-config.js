module.exports = {
  siteMetadata: {
    title: `Jack Lo Russo — designer & developer`,
    author: `Jack Lo Russo`
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [`gatsby-remark-prismjs`, `gatsby-remark-smartypants`]
      }
    }
  ]
};
