# ts-standard-eslint-flat-config
This library provides an eslint flat config file based on the ts-standard library.

### Why?
ts-standard doesn't integrate with idea products, but eslint does. This config file allows using
ts-standard rules and configuration in any idea that works with eslint.

### usage
In your eslint.config.js import this library and spread the config into your config
```js
import tsStandardEslintFlatConfig from 'ts-standard-eslint-flat-config'

export default [
  ...tsStandardEslintFlatConfig,
  //your config goes here
]
```

Or if you need to modify the configs or customize the configs you can import each of them individually

```js
import {standardJs, standardTs, extraConfig} from 'ts-standard-eslint-flat-config'

delete standardts.rules['@typescript-eslint/strict-boolean-expressions']

export default [
  standardJs,
  standardTs,
  extraConfig
]
```

### Use with React
For eslint to properly handle jsx files, the eslint-plugin-react dependency is required

For example
```js
import {standardJs, standardTs, extraConfig} from 'ts-standard-eslint-flat-config'
import react from 'eslint-plugin-react'
import globals from 'globals'

const reactConfig = react.configs.flat.recommended

delete reactConfig.rules['react/prop-types']

export default [
  standardJs,
  react.configs.flat['jsx-runtime'],
  react.configs.flat.recommended,
  standardTs,
  extraConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest
      }
    }
  }
]

```