var path = require("path")

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
