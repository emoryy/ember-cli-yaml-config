import Ember from 'ember';

import config from 'dummy/config/environment';

export default Ember.Controller.extend({
  override: config.override,
  deepMerge: config.deepMerge,
  first: config.first,
  second: config.second,
  array: config.array
});
