const _ = require("lodash");
const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve("./src/templates/blog-post.js");
    resolve(
      graphql(`
        query FetchPosts {
          posts: allBlogPosts {
            edges {
              node {
                id
                title
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        // Create pages for each markdown file.
        result.data.posts.edges.forEach(({ node }) => {
          // Create a path for pages

          const path = node.slug;
          const search_value = node.slug;
          createPage({
            path,
            component: blogPost,
            // If you have a layout component at src/layouts/blog-layout.js
            // layout: `blog-layout`,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              search_value
              // Your Variables example: Slug, Path, Name, Author, etc. **Whatever is needed for queries**
            }
          });
        });
      })
    );
  });
};
