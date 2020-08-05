# NextJS Template

This is a template for NextJS with Typescript, ESLint, Prettier and VSCode configured

# References

- [https://stackoverflow.com/questions/58233482/next-js-setting-up-eslint-for-nextjs](https://stackoverflow.com/questions/58233482/next-js-setting-up-eslint-for-nextjs)
- [https://medium.com/javascript-scene/streamline-code-reviews-with-eslint-prettier-6fb817a6b51d](https://medium.com/javascript-scene/streamline-code-reviews-with-eslint-prettier-6fb817a6b51d)
- [https://medium.com/@gogl.alex/how-to-set-up-typescript-eslint-prettier-for-next-gatsby-c5330b4a9b7a](https://medium.com/@gogl.alex/how-to-set-up-typescript-eslint-prettier-for-next-gatsby-c5330b4a9b7a)
- [https://dev.to/diondre27/using-eslint-and-prettier-in-a-typescript-next-js-project-with-pre-commit-hooks-amf](https://dev.to/diondre27/using-eslint-and-prettier-in-a-typescript-next-js-project-with-pre-commit-hooks-amf)
- [https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)
- [https://www.youtube.com/watch?v=SydnKbGc7W8](https://www.youtube.com/watch?v=SydnKbGc7W8)
- [https://medium.com/@joelmasters/setting-up-eslint-for-nextjs-37163d4cabaa](https://medium.com/@joelmasters/setting-up-eslint-for-nextjs-37163d4cabaa)

# Steps to reproduce

1. install eslint

   ```bash
   npm i --save-dev eslint
   ```

2. install plugins

   ```bash
   # https://www.npmjs.com/package/eslint-config-airbnb
   # installs
   # - eslint-config-airbnb
   # - eslint-plugin-import
   # - eslint-plugin-react
   # - eslint-plugin-react-hooks
   # - eslint-plugin-jsx-a11y
   npx install-peerdeps --dev eslint-config-airbnb

   npm i --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
   ```

3. install prettier

   ```bash
   npm i --save-dev prettier eslint-config-prettier eslint-plugin-prettier
   ```

4. create `eslintrc.yaml`

   - code

     ```yaml
     ---
     env:
       browser: true
       es2020: true
     extends:
       - airbnb
       - airbnb/hooks
       - plugin:@typescript-eslint/recommended
       - plugin:react/recommended
       - plugin:import/errors
       - plugin:import/warnings
       - plugin:import/typescript
       # always put prettier last
       - prettier/@typescript-eslint # Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
       - plugin:prettier/recommended # Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.

       # doesn't work instead of plugin:prettier/recommended
       # - prettier

     globals:
       Atomics: readonly
       SharedArrayBuffer: readonly
     parser: '@typescript-eslint/parser'
     parserOptions:
       ecmaFeatures:
         jsx: true
       ecmaVersion: 2020
       sourceType: module
     plugins:
       - react
       - '@typescript-eslint'
       - prettier
     rules:
       # rule's settings
       # --------------------------------
       # "off" or 0 - turn the rule off
       # "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
       # "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
       #
       # additional rule options
       # --------------------------------
       # quotes: ["error", "double"]

       # use prettierrc.yaml
       # doesn't work too well here?
       # prettier/prettier:
       # - 'error' # ?
       # - tabWidth: 2
       # - singleQuote: true

       react/destructuring-assignment: [error, never]

       react/jsx-filename-extension: 'off'
       import/extensions: 'off'
       import/prefer-default-export: 'off'
       react/jsx-one-expression-per-line: 'off'

       # Don't allow unused variables
       no-unused-vars: 'error'

       # https://github.com/airbnb/javascript/pull/2136
       # https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/632
       jsx-a11y/label-has-associated-control:
         - error
         - labelComponents: []
           labelAttributes: []
           controlComponents: []
           assert: either
           depth: 25

       # Allow untyped functions
       # must be quoted
       '@typescript-eslint/explicit-module-boundary-types': off

       # Require naming react components
       react/display-name: 'error'

       # NextJs specific fix: suppress errors for missing 'import React' in files for nextjs
       react/react-in-jsx-scope: 'off'

     settings:
       import/resolver:
         node:
           extensions:
             - '.js'
             - '.jsx'
             - '.ts'
             - '.tsx'
             - '.d.ts'
     ```

5. create `prettierrc.yaml`

   ```yaml
   semi: false
   trailingComma: 'all'
   singleQuote: false
   printWidth: 120
   tabWidth: 4
   ```

6. install eslint and prettier extension for vscode
7. vscode settings for auto fixes `.vscode/settings.json`

   ```bash
   {
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     },
     "editor.formatOnSave": true
   }
   ```

8. create `.eslintignore`

   ```bash
   # don't ever lint node_modules
   node_modules
   ```

9. edit `package.json`

   ```yaml
   'scripts': { 'lint': "eslint '*/**/*.{js,ts,tsx}' --quiet --fix" }
   ```
