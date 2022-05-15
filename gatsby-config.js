module.exports = {
  siteMetadata: {
    title: `AppQue | Leading Web & App Development Agency Noida`,
    description: `AppQue is a leading Web development company in noida that provides website and application development services to Grow Businesses Online.`,
    siteUrl: `https://www.appque.in/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Leading Web & Application Development Agency in Noida`,
        short_name: `AppQue`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2d6ef0`,
        display: `standalone`,
        icon: `src/images/icon2.png`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
      __key: `pages`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/contents/blog`,
      },
      __key: `blogs`,
    },
  ],
};
