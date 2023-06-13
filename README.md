# Source base

## Table of contents

### Project Structure
    .
    ├── assets
    │   ├── data                # Data
    │   ├── fonts               # Font icons
    │   ├── icons               # Favicon files
    │   ├── images              # Image files ( SVG, PNG, JPG )
    ├── i18n                    # Translate languages
    │   ├── en.json
    │   ├── cn.json
    ├── public                  # Build folder for deploy production
    ├── src
    │   ├── components          # Vue Components
    │   ├── hooks               # Vue 3 hooks
    │   ├── modals              # Modal view
    │   ├── styles
    │   ├── enums               # Define enums for each module
    │   ├── types               # Define types for each module
    │   ├── utils
    │   ├── main.ts
    ├── .env                    # ENV config for webpack builder ( API, APP_URL, NODE_ENV, PORT, etc... )
    ├── .env.development        # ENV config info ( helpful clone to .env file )
    ├── .eslintignore           # Ignore validate EsLint some files
    ├── .eslintrc               # EsLint config
    ├── .nvmrc                  # Project nodejs version
    ├── .prettierignore         # Ignore validate Prettier some files
    ├── .prettierrc             # Prettier config
    ├── .stylelintrc            # Stylelint config
    ├── index.html
    ├── package.json
    ├── tsconfig.json           # Typescript config
    ├── vite.config.ts          # Vite config
    ├── pnpm-lock.yaml
    └── ...

### Install project dependencies
* Install [PNPM](https://pnpm.io/) latest version
* Install Nodejs 18 ( Should be use [NVM](https://github.com/nvm-sh/nvm) for install NodeJS )

### Install package dependencies for Editor tool
* Eslint
* CSSlint
* Typescript
* Linter
* Linter EsLint
* Prettier

### Builder Info
* Vue 3
* Vite 4
* Vite plugins ( uglifyjs, compression, manifest, preload resources, optimize module loader, etc... )
* Typescript
* ESLint / TSLint / Stylint

### Run project
* Use nodejs version 18
* `Clone .env.development to .env file`
```
APP_URL=
NODE_ENV=development
PORT=3000
```
* Install node_modules `pnpm install`
* Run server-dev local `pnpm dev`
  - `NODE_ENV=development`
* Build production `pnpm start`
  - `NODE_ENV=production`

### Before do task
* Please create new branch with your issue.
* Please pull new code from **develop** branch before checkout your branch
* Branch naming
  - feat/PE-xxx
  - fix/PE-xxx
  - refactor/PE-xxx
  - docs/PE-xxx
  - style/PE-xxx
  - perf/PE-xxx
  - vendor/PE-xxx
  - chore/PE-xxx

### Before commit
* Please don't include anything that not been developed by you.
* Please don't commit anything that can be regenerated from other things that were committed such as node_modules.
* Your code, you must be cleanup and please check format code before commit ( tabs, spaces, blank )
* In your message commit, please reference your issue for review task. Ex: `git commit -m"[feat][PE-49] Message`
* Commit message `MUST` clean ( commit code detail, message fix bug, etc... ) [How to write good message](https://chris.beams.io/posts/git-commit/)
* Please using **develop** branch for development and don't use **master** branch.

### Optional commit
* Merge code from **develop** branch and if conflict please fix conflict.

### Before push
* Make sure eslint / tslint has verified ( please don't use git commit option `--no-verify` )
* Don't use `git rebase` `git reset` `git force`

### Gitlab target
* Create new pull request with your branch and merge to **develop** branch.
* Add reviewers for review your pull request.
* When you create new pull request if you see conflict, please decline pull request and fix.
