import { module, test } from 'qunit';

import config from 'dummy/config/environment';

module('config');

test('it overrides values', function(assert) {
  assert.equal(config.override, 'bar');
});

test('it merges objects', function(assert) {
  assert.deepEqual(config.deepMerge, { one: 1, two: 2 });
});

test('it has values from first config file', function(assert) {
  assert.equal(config.first, 'a');
});

test('it has values from second config file', function(assert) {
  assert.equal(config.second, 'b');
});

test('it doesn\'t merge arrays in any way', function(assert) {
  assert.deepEqual(config.array, ['a', 'b', 'c']);
});
