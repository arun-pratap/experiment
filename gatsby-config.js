module.exports = {
  siteMetadata: {
    title: `AppQue | Web & Mobile App Development Agency that drives something`,
    description:`kkkj`,
    siteUrl: `https://www.appque.in/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AppQue - Web & Mobile App Development Agency`,
        short_name: `AppQue`,
        start_url: `/`,
        background_color: `#15151e`,
        theme_color: `#15151e`,
        display: `standalone`,
        icon: `src/images/icon.png`,
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
