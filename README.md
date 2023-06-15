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

- Install [PNPM](https://pnpm.io/) latest version
- Install Nodejs 18 ( Should be use [NVM](https://github.com/nvm-sh/nvm) for install NodeJS )

### Install package dependencies for Editor tool

- Eslint
- CSSlint
- Typescript
- Linter
- Linter EsLint
- Prettier

### Builder Info

- Vue 3
- Vite 4
- Vite plugins ( PWA, uglifyjs, fonts, auto imports, compression, manifest, preload resources, optimize module loader, etc... )
- Typescript
- ESLint / TSLint / Stylint

### Run project

- Use nodejs version 18
- `Clone .env.development to .env file`

```
APP_URL=
NODE_ENV=development
PORT=3000
```

- Install node_modules `pnpm install`
- Run server-dev local `pnpm dev`
  - `NODE_ENV=development`
- Build production `pnpm start`
  - `NODE_ENV=production`
