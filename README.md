# Nuxt 3 with Nuxt Content

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) & [Nuxt Content](https://content.nuxtjs.org/) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:5555`:

\*The server settings have been edited. See [nuxt.config.ts](nuxt.config.ts) for details

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Installed Modules

If you want to see details other than the following list, check [package.json](package.json) or [nuxt.config.ts](.nuxt.config.ts)

### CSS Extensions

2023-9 UPDATE

- [Sass](https://sass-lang.com/)
  - [Sass-loader](https://github.com/webpack-contrib/sass-loader)

### Modules for code quality

2023-9 UPDATE

- [ESLint](https://eslint.org/)
  - See [.eslintrc](.eslintrc) for configuration
- [Prettier](https://prettier.io/)
  - See [.pretierrc](.pretierrc) for configuration
- [Stylelint](https://stylelint.io/)
  - [stylelint-config-recommended-scss](https://github.com/stylelint-scss/stylelint-config-recommended-scss)
  - See [.styelintrc](.styelintrc) for configuration

### SEO

2023-9 UPDATE

- [@zadigetvoltaire/nuxt-gtm](https://github.com/zadigetvoltaire/nuxt-gtm)
- [nuxt-json-ld](https://github.com/ymmooot/nuxt-jsonld)
  - [google/schema-dts](https://github.com/google/schema-dts)
