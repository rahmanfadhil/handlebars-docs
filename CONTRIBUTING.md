# Development setup

This site uses [Vuepress](https://v1.vuepress.vuejs.org/) as static page generator.
It is a static page generator based on [vue.js](https://vuejs.org/) and created
to write the documentation of that framework.

Vuepress is based on markdown files. Each HTML-page on the site has
a corresponding markdown file in this repository.

# Requirements and recommended tools

The following tools are required to build and develop the site.

- NodeJS (latest LTS) and the corresponding version of `npm`

The following tools will help you developing

- A text editor, preferably an IDE with Markdown, JavaScript and CSS support
  [Visual Studio Code](https://code.visualstudio.com/)
  or [IntelliJ IDEA Ultimate](https://www.jetbrains.com/idea/download/) are possible choices.
- IDE-support for Vue.js, Markdown, JavaScript and Stylus
- The [vue-devtools](https://github.com/vuejs/vue-devtools)

# Setup / Commands

After cloning the repository,

- `npm install` (required) installs the dependencies libraries and is required for building the site.
- `npm run dev` runs a webpack-dev-server.\** This server features live-reloading.
  Styles will automatically be updated when you change the source files. Changes
  in markdown changes and Vue.js components will be visible immediately.
  *Note that changes to the file `src/.vuepress/config.js` are not part of the
  live-reload and require a restart of the command\*.
- `npm run preview` will build and preview the site.\*\* This command gives a
  production-like preview of the site, serving essentially the same files as on the actual site.

## Differences between dev-server and production

The Vuepress site is a Vue.js application. While the dev-server runs the whole application in
the browser, the production site is pre-rendered with subsequent changes running in the browser.

Vue.js components that only work in the browser will work correctly in the dev-server, but
will fail in production.

See [Browser API Access Restrictions](https://v1.vuepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions)
for details.

A few notes on the site and the build processes

- The site uses the Vuepress default-theme with a few custom styles.
- Markdown files in this repository automatically become HTML-files on the site.

## Files and directories

The `src` folder contains all sources of the page. That includes

- `src/**/*.md`: Markdown files, one for each HTML files containing the actual content.
- `src/.vuepress/styles`: [stylus](http://stylus-lang.com/) files that adjust the
  CSS styles of the website (TODO add documentation link)
- `src/.vuepress/components`: custom Vue.js components and Layouts created for this site
  (TODO add documentation link)
- `src/.vuepress/public/`: root directory for public files that are copied to the site
  as-is.
- `src/.vuepress/plugins/`: Vuepress-plugins created for this site.

# Deployment

When the master branch is pushed to GitHub, a [Travis-CI job](https://travis-ci.org/handlebars-lang/docs)
will build and update the site. No setup is required.

The Travis-CI job uses the [handlebars-site-bot](https://github.com/handlebars-site-bot) account
to update the github-pages of this repository.