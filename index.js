import standardJs from 'eslint-config-standard'
import standardTs from 'eslint-config-standard-with-typescript'
import globals from 'globals'
import importPlugin from 'eslint-plugin-import'
import n from 'eslint-plugin-n'
import promise from 'eslint-plugin-promise'
import tslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
delete standardTs.extends

function toLanguageOptions (conf) {
  conf.languageOptions = {
    parserOptions: conf.parserOptions || {
      project: true
    }
  }
  delete conf.parser
  delete conf.plugins
  delete conf.globals
  delete conf.env
  delete conf.parserOptions
}

toLanguageOptions(standardJs)
toLanguageOptions(standardTs)

standardTs.languageOptions.parser = tsparser

standardTs.files = [ '**/*.{ts,tsx}' ]

standardJs.files = [ '**/*.{js,jsx,mjs,cjs}' ]

export const extraConfig = {
  plugins: {
    import: importPlugin,
    n,
    promise,
    '@typescript-eslint': tslint
  },
  languageOptions: {
    globals: {
      ...globals.es2021,
      ...globals.node,
    }
  }
}

export {standardTs, standardJs} 

export default [
  standardJs,
  standardTs,
  {
    plugins: {
      import: importPlugin,
      n,
      promise,
      '@typescript-eslint': tslint
    },
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.node,
      }
    }
  }
]
