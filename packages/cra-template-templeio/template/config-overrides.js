const path = require('path');

const { override, addBabelPlugin, addWebpackAlias } = require('customize-cra');

const conf = require('./tsconfig.paths.json');

const webPackAlias = Object.entries(conf.compilerOptions.paths).reduce(
  (acc, [key, value]) => {
    const keyPath = key.replace(/\/\*$/, '');
    const valuePath = value[0].replace(/\/\*$/, '');
    return { ...acc, [keyPath]: path.resolve(__dirname, valuePath) };
  },
  {},
);
module.exports = override(
  addWebpackAlias(webPackAlias),
  addBabelPlugin([
    '@emotion',
    {
      importMap: {
        '@mui/material': {
          styled: {
            canonicalImport: ['@emotion/styled', 'default'],
            styledBaseImport: ['@mui/material', 'styled'],
          },
        },
        '@mui/material/styles': {
          styled: {
            canonicalImport: ['@emotion/styled', 'default'],
            styledBaseImport: ['@mui/material/styles', 'styled'],
          },
        },
      },
    },
  ]),
);
