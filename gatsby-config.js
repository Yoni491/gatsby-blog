module.exports = {
    siteMetadata: {
        title:"Yonder.",
        author: "Yoni Ender",
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options:{
                spaceId:process.env.CONTENTFUL_SPACE_ID,
                accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        `gatsby-plugin-sass`,
        {
            resolve:'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-transformer-remark`,
            options: {
              // Footnotes mode (default: true)
              footnotes: true,
              // GitHub Flavored Markdown mode (default: true)
              gfm: true,
              // Plugins configs
              plugins: [
                  {
                      resolve:'gatsby-remark-images',
                      options:{
                          maxWidth: 750,
                          linkImagesToOriginal: false
                      }
                  },
              ],
            },
          },
    ]
}