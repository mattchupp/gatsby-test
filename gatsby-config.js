module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // "uikit",
    // {
    //   resolve: `uikit`,
    //   options: {
    //     includePaths: [
    //       require('path').resolve(__dirname, 'node_modules')
    //     ]
    //   },
    // },
  ],
}
