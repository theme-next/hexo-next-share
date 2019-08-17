const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

module.exports = function(hexo, pluginDir) {
  return {
    defaultConfigFile(key, file) {
      let defaultConfig = yaml.safeLoad(fs.readFileSync(pluginDir ? path.join(pluginDir, file) : file));
      hexo.config[key] = Object.assign(defaultConfig[key], hexo.theme.config[key], hexo.config[key]);
      return hexo.config[key];
    }
  };
};
