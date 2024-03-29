/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

const siteAddress = new URL("https://patriots.fandiscussion.com")

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Roboto Condensed`,
    //         variants: [`700`],
    //       },
    //       {
    //         family: `Open Sans`,
    //         variants: [`400`, `700`],
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-s3`,
    //   options: {
    //     bucketName: process.env.AWS_BUCKET_NAME,
    //     protocol: siteAddress.protocol.slice(0, -1),
    //     hostname: siteAddress.hostname,
    //   },
    // },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteAddress.href.slice(0, -1),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-image`,
  ],
}
