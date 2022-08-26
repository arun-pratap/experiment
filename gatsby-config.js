module.exports = {
  siteMetadata: {
    title: `AppQue | Leading Web and Application Development Agency Noida`,
    description: `AppQue is a web development company that provides Web Design, Web Development, Ecommerce Develoment, Headless CMS Development services to Grow Businesses Online.`,
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
        // 2d6ef0
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
  ],
};
