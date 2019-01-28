module.exports = () => {
  return {
    test: /\.(svg)$/i,
    use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        },
      },
      {
        loader: 'svgo-loader',
        options: {
          plugins: [
            { cleanupAttrs: true },
            { removeDoctype: true },
            { removeXMLProcInst: true },
            { removeComments: true },
            { removeMetadata: true },
            { removeTitle: true },
            { removeDesc: true },
            { removeUselessDefs: true },
            { removeXMLNS: false },
            { removeEditorsNSData: true },
            { removeEmptyAttrs: true },
            { removeHiddenElems: true },
            { removeEmptyText: true },
            { removeEmptyContainers: true },
            { removeViewBox: false },
            { cleanUpEnableBackground: true },
            { minifyStyles: true },
            { convertStyleToAttrs: true },
            { convertColors: true },
            { convertPathData: true },
            { convertTransform: true },
            { removeUnknownsAndDefaults: true },
            { removeNonInheritableGroupAttrs: true },
            { removeUselessStrokeAndFill: true },
            { removeUnusedNS: true },
            { cleanupIDs: true },
            { cleanupNumericValues: true },
            { cleanupListOfValues: true },
            { moveElemsAttrsToGroup: true },
            { moveGroupAttrsToElems: true },
            { removeRasterImages: false },
            { mergePaths: true },
            { convertShapeToPath: true },
            { sortAttrs: false },
            { transformsWithOnePath: false },
            { removeDimensions: false },
            { removeAttrs: false },
            { removeElementsByAttr: false },
            { addClassesToSVGElement: false },
            { addAttributesToSVGElement: false },
            { removeStyleElement: false }
          ]
        }
      }
    ]
  }
}