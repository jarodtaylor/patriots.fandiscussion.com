/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `6q99df0pcjpf`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        // CONTENT API TOKEN: CFPAT-i6KtErNZnWxEmFC8rW882UE9mZmM2wCiuBokjf999xw
        // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        accessToken: `38eCRbwNH-Nk_QVpqAVQYiBphCcjMJwaRD5rdReH72c`,
        downloadLocal: true,
      },
    },
    `gatsby-plugin-postcss`,
  ],
}
