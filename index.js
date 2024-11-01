import eslintConfigStandard from 'eslint-config-standard'
import standardts from 'eslint-config-standard-with-typescript'
import globals from 'globals'
import importPlugin from 'eslint-plugin-import'
import n from 'eslint-plugin-n'
import promise from 'eslint-plugin-promise'
import tslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
delete standardts.extends

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

toLanguageOptions(eslintConfigStandard)
toLanguageOptions(standardts)

standardts.languageOptions.parser = tsparser

standardts.files = [ '**/*.{ts,tsx}' ]

eslintConfigStandard.files = [ '**/*.{js,jsx,mjs,cjs}' ]

export default [
  eslintConfigStandard,
  standardts,
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
