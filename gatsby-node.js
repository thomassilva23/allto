const { createFilePath } = require(`gatsby-source-filesystem`)

// To add the slug field to each client
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    createNodeField({
      node,
      name: "slug",
      value: `/${slug}`,
      //If you want to show only the name of client, use {slug.slice(12)} ; 12 is number of start string in MD clients.
    })
  }
}
