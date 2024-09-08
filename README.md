# ts-standard-eslint-flat-config
This library provides an eslint flat config file based on the ts-standard library.

### Why?
ts-standard doesn't integrate with idea products, but eslint does. This config file allows using
ts-standard rules and configuration in any idea that works with eslint.

### usage
In your index.js import this library and spread the config into your config
```js
import tsStandardEslintFlatConfig from 'ts-standard-eslint-flat-config'

export default [
  ...tsStandardEslintFlatConfig,
  //your config goes here
]
```
