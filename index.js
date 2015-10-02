/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-yaml-config',

  config: function(environment) {
    var existsSync = require('exists-sync');
    var lodash = require('lodash');
    var path = require('path');
    var yamljs = require('yamljs');

    var configPath = path.dirname(this.project.configPath());
    var addonOptions = (this.app && this.app.options.yamlConfig) || {};
    var configFileNames = addonOptions.fileNames || ['config.yml', 'sec_config.yml'];

    return configFileNames.reduce(function(acc, fileName) {
      var configFilePath = path.join(configPath, fileName);
      var config = {};

      if(existsSync(configFilePath)) {
        config = yamljs.load(configFilePath)[environment] || {};
      } else {
        if(addonOptions.warnAboutNonexistingFiles) {
          console.warn(
            '[YamlConfig] File ' + configFilePath + ' doesn\'t exist.'
          );
        }
      }
      return lodash.merge(acc, config);
    }, {});
  }
};
