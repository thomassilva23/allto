const clientsQuery = `{
    clients: allMarkdownRemark (
    ){
        edges {
            node {
                objectID: id
                fields {
                    slug
                }
                frontmatter {
                    date_timestamp: date
                    date
                    title
                }
                excerpt(pruneLength: 5000)
            }
        }
    }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date.timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }))
const queries = [
  {
    query: clientsQuery,
    transformer: ({ data }) => flatten(data.clients.edges),
    indexName: "Clients",
    settings: {
      attributesToSnippet: ["excerpt:20"],
    },
  },
]

module.exports = queries
