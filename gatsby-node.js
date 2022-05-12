const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};

async function makeBlogPostFromMdx({ graphql, actions }) {
  /* 
    @TODO
    1. Define Template Path
    2. Get data using gatsby(graphql)
    3. createPages
    **/
  const { createPage } = actions;
  const blogPostTemplatePath = path.resolve(`./src/templates/blogPost.js`);
  const { errors, data } = await graphql(
    `
      {
        allMdx {
          edges {
            node {
              body
              excerpt(pruneLength: 100)
              frontmatter {
                docTitle
                blogTitle
                coverImageURL
                coverImageCredit
                coverImageAlt
                slug
                categories
                authorName
                authorAvatarURL
                lastUpdatedAt
                publishingDate
                quickSummary
              }
              timeToRead
              slug
            }
          }
        }
      }
    `
  );
  if (errors) {
    console.log("ShowTime:", errors);
    throw new Error("Duuude! I don't expect this from you.You can do better");
  }

  const blogPosts = data.allMdx.edges;
  //   console.log(blogPosts);
   blogPosts.forEach((blogPost, index) => {
    createPage({
      path: `/blog/${blogPost.node.frontmatter.slug}`,
      component: blogPostTemplatePath,
      context: {
        //unique Identifier
        slug: blogPost.node.slug,
      },
    });
  });
}

// createPages for all
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  await Promise.all([makeBlogPostFromMdx({ graphql, actions })]);
};
