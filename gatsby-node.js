const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // Get path to template
    const blogTemplate = path.resolve("./src/templates/blog.js");

    // Get markdown data
    const response = await graphql(`
    query {
        allContentfulBlogPost {
            edges {
                node {
                    slug
                }
            }
        }
    }   
    `);

    response.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        });
    })

}