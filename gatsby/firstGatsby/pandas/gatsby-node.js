const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode, basePath: 'pages' });
        createNodeField({ node, name: 'slug', value: slug});
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);
    console.log(result);
    console.log(result.data.allMarkdownRemark.edges);

   Array.prototype.forEach.call(result.data.allMarkdownRemark.edges, ({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/blog-post.js'),
            context: {
                //data passed to context is available
                //in page queries as graphql variables.
                slug: node.fields.slug,
            },
        });
   });
}