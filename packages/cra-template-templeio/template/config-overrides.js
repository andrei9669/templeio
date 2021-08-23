const conf = require('./tsconfig.paths.json');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      ...Object.entries(conf.compilerOptions.paths).reduce((acc, cur) => {
        const key = cur[0].replace(/\/\*$/, '');
        const value = cur[1][0].replace(/\/\*$/, '');
        return { ...acc, [key]: value };
      }, {}),
    },
  };
  return config;
};
