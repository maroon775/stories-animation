const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        style: 'css'
    }),
    addLessLoader({
        javascriptEnabled: true,
    })
);