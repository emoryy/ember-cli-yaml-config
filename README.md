# ember-cli-yaml-config

[![Code Climate](https://codeclimate.com/github/netguru/ember-cli-yaml-config/badges/gpa.svg)](https://codeclimate.com/github/netguru/ember-cli-yaml-config)

## Installation

`npm install ember-cli-yaml-config --save-dev`

# Usage

This addon reads yaml files placed in your apps `config` directory – `config.yml` and `sec_config.yml` and adds keys found there to the environment object, depending in which environment you are right now.

## Example

```yaml
# config/config.yml
development:
  foo: bar
test:
  foo: baz
production:
  foo: biz
```

You can access those values through the environment object:

```js
import config from 'your-app-name/config/environment';

// when in development environment
console.log(config.foo); #=> bar

// when in test environment
console.log(config.foo); #=> baz

// when in production environment
console.log(config.foo); #=> biz
```

The second file – `sec_config.yml` – is so you could add it to `.gitignore` and use it to override values from `config.yml`. This might be useful if you need to override something for your local machine, or if you have multiple builds of the app and link the `sec_config.yml` with custom values for that build as a part of the deployemnt process.

## Configuration

There are two configuration options, here's how you could set them to their defaults:

```js
// ember-cli-build.js

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    yamlConfig: {
      fileNames: ['config.yml', 'sec_config.yml'],
      warnAboutNonexistingFiles: false
    }
  });

  return app.toTree();
};
```

`fileNames` is used to list the `.yml` files to merge into config. The order is important, values from the latter files take precedence.

If `warnAboutNonexistingFiles` is set to `true` it will log a warning if any of the files specified in `fileNames` doesn't exist.

## Fair word of warning about secrecy of the config files

Do not forget that the environment object is part of the build, which means that **contents of the config files cannot be treated as "secret"** by any means.

# Development

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
