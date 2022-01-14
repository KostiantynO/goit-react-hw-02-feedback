```shell
npx create-react-app goit-react-hw-02-feedback

npm i -D prettier eslint prop-types gh-pages styled components

npx mrm@2 lint-staged

curl -O https://raw.githubusercontent.com/goitacademy/react-lint-staged-workshop/master/.prettierrc.json

gca "initial project files"
git remote add origin https://github.com/KostiantynO/goit-react-hw-02-feedback.git
gph
```

### package.json - add to `package.json` `deploy` and `predeploy`scripts and `homepage`:

```json
  "homepage": "https://KostiantynO.github.io/goit-react-hw-01-components",

  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },

  "lint-staged": {
    "*.{js,jsx}": "eslint --cache --fix",
    "*.{js,jsx,css,sass,md}": "prettier --write"
  }
```

```shell
gca "adds deploy script"
gp
npm run deploy
```

`jsconfig.json`

```json
{
  "compilerOptions": { "baseUrl": "src" },
  "exclude": ["node_modules", "build"],
  "include": ["src"]
}
```

`src/common.js`

```js
// import { React, Component, ReactDOM, nanoid, styled, ThemeProvider, PropTypes, theme } from 'common'
```
