const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articlePageResponse = await graphql(`
    query {
      allContentfulArticle {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  articlePageResponse.data.allContentfulArticle.edges.forEach(edge => {
    createPage({
      path: `/articles/${edge.node.slug}`,
      component: path.resolve("./src/templates/article.jsx"),
      context: {
        slug: edge.node.slug,
      },
    })
  })

  const articlesByAuthor = await graphql(`
    query {
      allContentfulAuthor {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  articlesByAuthor.data.allContentfulAuthor.edges.forEach(edge => {
    if (edge.node.slug !== null) {
      createPage({
        path: `/articles/${edge.node.slug}`,
        component: path.resolve("./src/templates/authorIndex.jsx"),
        context: {
          slug: edge.node.slug,
        },
      })
    }
  })
}

exports.onCreateWebpackConfig = ({ actions, getConfig, options }) => {
  const prevConfig = getConfig()
  actions.replaceWebpackConfig({
    ...prevConfig,
    module: {
      ...prevConfig.module,
      rules: [
        ...prevConfig.module.rules.map(item => {
          const { test } = item
          if (
            test &&
            test.toString() === "/\\.(ico|svg|jpg|jpeg|png|gif|webp)(\\?.*)?$/"
          ) {
            return {
              ...item,
              exclude: [path.resolve(__dirname, "src/assets/icons")],
            }
          }
          return { ...item }
        }),
        {
          test: /\.svg$/,
          use: [
            {
              loader: "svg-sprite-loader",
              options,
            },
          ],
          include: [path.resolve(__dirname, "src/assets/icons")],
        },
      ],
    },
    resolve: {
      ...prevConfig.resolve,
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

exports.onCreateNode = ({ node }) => {
  if (node.internal.type === `MarkdownRemark`) {
    console.log(node.internal.type)
  }
}
