/* global hexo */

'use strict';

const utils = require('./utils')(hexo, __dirname);

hexo.extend.filter.register('theme_inject', injects => {
  ['likely', 'needmoreshare', 'sharejs'].forEach(item => {
    let config = utils.defaultConfigFile(item, 'default.yaml');
    if (config.enable) {
      require(`./lib/${item}`)(config, injects);
    }
  });
});
