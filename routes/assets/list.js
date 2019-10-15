const express = require('express');

module.exports = [
  {
    name: "Bootstrap",
    url: "bootstrap",
    wiki: "Bootstrap_(front-end_framework)",
    git: "twbs/bootstrap",
    twitter: "getbootstrap",
    category: "frontend",
    type: "cssframework",
    brief: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web...",
    img: "img/logos/bootstrap.jpeg"
  },
  {
    name: "Materialize",
    url: "materialize",
    git: "dogfalo/materialize",
    twitter: "materializecss",
    category: "frontend",
    type: "cssframework",
    brief: "Materialize, a CSS Framework based on Material Design...",
    img: "img/logos/materialize.png"
  },
  {
    name: "Semantic UI",
    url: "semanticui",
    git: "semantic-org/semantic-ui",
    twitter: "semanticui",
    category: "frontend",
    type: "cssframework",
    brief: "Semantic is a UI component framework based around useful principles from natural language...",
    img: "img/logos/semanticui.png"
  },
  {
    name: "Bulma",
    url: "bulma",
    git: "jgthms/bulma",
    twitter: "bulmaio",
    category: "frontend",
    type: "cssframework",
    brief: "Modern CSS framework based on Flexbox...",
    img: "img/logos/bulma.png"
  },
  {
    name: "Foundation",
    url: "foundation",
    wiki: "Foundation_(framework)",
    git: "zurb/foundation-sites",
    twitter: "zurbfoundation",
    category: "frontend",
    type: "cssframework",
    brief: " Foundation is a responsive front-end framework. Foundation provides a responsive grid and HTML...",
    img: "img/logos/foundation.png"
  },
  {
    name: "Tailwind",
    url: "tailwind",
    git: "tailwindcss/tailwindcss",
    twitter: "tailwindcss",
    category: "frontend",
    type: "cssframework",
    brief: "A utility-first CSS framework for rapid UI development...",
    img: "img/logos/tailwind.png"
  },
  {
    name: "Sass",
    url: "sass",
    wiki: "Sass_(stylesheet_language)",
    git: "sass/sass",
    twitter: "sasscss",
    category: "frontend",
    type: "csspreprocessor",
    brief: "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS)...",
    img: "img/logos/sass.png"
  },
  {
    name: "Less",
    url: "less",
    wiki: "Less_(stylesheet_language)",
    git: "less/less.js",
    twitter: "lesstocss",
    category: "frontend",
    type: "csspreprocessor",
    brief: "Less is a dynamic preprocessor style sheet language that can be compiled into Cascading Style Sheets (CSS)...",
    img: "img/logos/less.png"
  },
  {
    name: "Stylus",
    url: "stylus",
    wiki: "Stylus_(stylesheet_language)",
    git: "stylus/stylus",
    twitter: "automattic",
    category: "frontend",
    type: "csspreprocessor",
    brief: "Stylus is a dynamic stylesheet preprocessor language that is compiled into Cascading Style Sheets (CSS)...",
    img: "img/logos/stylus.png"
  },
  {
    name: "React",
    url: "react",
    wiki: "React_(JavaScript_library)",
    git: "facebook/react",
    twitter: "reactjs",
    category: "frontend",
    type: "jsframework",
    brief: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community...",
    img: "img/logos/react.png"
  },
  {
    name: "Angular",
    url: "angular",
    wiki: "Angular_(web_framework)",
    git: "angular/angular",
    twitter: "angular",
    category: "frontend",
    type: "jsframework",
    brief: " Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and...",
    img: "img/logos/angular.png"
  },
  {
    name: "Vue",
    url: "vue",
    wiki: "Vue.js",
    git: "vuejs/vue",
    twitter: "vuejs",
    category: "frontend",
    type: "jsframework",
    brief: "Vue.js is an open-source JavaScript framework for building user interfaces and single-page applications...",
    img: "img/logos/vue.png"
  },
  {
    name: "Express",
    url: "express",
    wiki: "Express.js",
    git: "expressjs/express",
    twitter: "expressjs",
    category: "backend",
    type: "nodeframework",
    brief: "Fast, unopinionated, minimalist web framework for Node.js. Express is a minimal and flexible Node.js web...",
    img: "img/logos/express.png"
  },
  {
    name: "Koa",
    url: "koa",
    git: "koajs/koa",
    category: "backend",
    type: "nodeframework",
    brief: "Expressive HTTP middleware framework for node.js to make web applications and APIs more enjoyable to write...",
    img: "img/logos/koa.png"
  },
  {
    name: "Hapi",
    url: "hapi",
    git: "hapijs/hapi",
    twitter: "hapijs",
    category: "backend",
    type: "nodeframework",
    brief: "A rich framework for building applications and services. hapi enables developers to focus on writing reusable...",
    img: "img/logos/hapi.png"
  },
  {
    name: "MongoDB",
    url: "mongodb",
    wiki: "MongoDB",
    git: "mongodb/mongo",
    twitter: "MongoDB",
    category: "backend",
    type: "database",
    brief: "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program... ",
    img: "img/logos/mongodb.png"
  },
  {
    name: "MySQL",
    url: "mysql",
    wiki: "MySQL",
    git: "mysql/mysql-server",
    twitter: "MySQL",
    category: "backend",
    type: "database",
    brief: "MySQL is an open-source relational database management system...",
    img: "img/logos/mysql.png"
  },
  {
    name: "Redis",
    url: "redis",
    wiki: "Redis",
    git: "antirez/redis",
    twitter: "redislabs",
    category: "backend",
    type: "database",
    brief: "Redis is an in-memory data structure project implementing a distributed, in-memory key-value database with...",
    img: "img/logos/redis.png"
  },
  {
    name: "Pug",
    url: "pug",
    git: "pugjs/pug",
    twitter: "pug_js",
    category: "backend",
    type: "template",
    brief: "A robust, elegant, feature rich template engine for Node.js...",
    img: "img/logos/pug.png"
  },
  {
    name: "EJS",
    url: "ejs",
    git: "tj/ejs",
    category: "backend",
    type: "template",
    brief: "A simple templating language that lets you generate HTML markup with plain JavaScript...",
    img: "img/logos/ejs.png"
  },
  {
    name: "Handlebars",
    url: "handlebars",
    git: "wycats/handlebars.js",
    twitter: "handlebarsjs",
    category: "backend",
    type: "template",
    brief: "Handlebars.js is a popular templating engine that is powerful, simple to use and has a large community...",
    img: "img/logos/handlebars.png"
  },
  {
    name: "Webpack",
    url: "webpack",
    wiki: "Webpack",
    git: "webpack/webpack",
    twitter: "webpack",
    category: "backend",
    type: "bundler",
    brief: "Webpack is an open-source JavaScript module bundler. It is a module bundler primarily for JavaScript...",
    img: "img/logos/webpack.png"
  },
  {
    name: "Parcel",
    url: "parcel",
    git: "parcel-bundler/parcel",
    twitter: "parceljs",
    category: "backend",
    type: "bundler",
    brief: "Blazing fast, zero configuration web application bundler...",
    img: "img/logos/parcel.png"
  },
  {
    name: "Rollup",
    url: "rollup",
    git: "rollup/rollup",
    twitter: "rollupjs",
    category: "backend",
    type: "bundler",
    brief: "Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and...",
    img: "img/logos/rollup.jpeg"
  },
  {
    name: "NPM Scripts",
    url: "npm",
    wiki: "Npm_(software)",
    git: "npm/cli",
    twitter: "npmjs",
    category: "backend",
    type: "taskrunner",
    brief: "npm is a package manager for the JavaScript programming language. It is the default package manager for the...",
    img: "img/logos/npm.png"
  },
  {
    name: "Gulp",
    url: "gulp",
    wiki: "Gulp.js",
    git: "gulpjs/gulp",
    twitter: "gulpjs",
    category: "backend",
    type: "taskrunner",
    brief: "Gulp is an open-source JavaScript toolkit used as a streaming build system in front-end web development...",
    img: "img/logos/gulp.png"
  },
  {
    name: "Grunt",
    url: "grunt",
    wiki: "Grunt_(software)",
    git: "gruntjs/grunt",
    twitter: "gruntjs",
    category: "backend",
    type: "taskrunner",
    brief: "Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification...",
    img: "img/logos/grunt.png"
  },
  {
    name: "Jest",
    url: "jest",
    wiki: "Jest_(JavaScript_framework)",
    git: "facebook/jest",
    twitter: "fbjest",
    category: "backend",
    type: "testing",
    brief: "Jest is a JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel...",
    img: "img/logos/jest.png"
  },
  {
    name: "Jasmine",
    url: "jasmine",
    wiki: "Jasmine_(JavaScript_testing_framework)",
    git: "jasmine/jasmine",
    twitter: "jasminebdd",
    category: "backend",
    type: "testing",
    brief: "Jasmine is an open source testing framework for JavaScript. It aims to run on any JavaScript-enabled platform...",
    img: "img/logos/jasmine.png"
  },
  {
    name: "Mocha",
    url: "mocha",
    wiki: "Mocha_(JavaScript_framework)",
    git: "mochajs/mocha",
    category: "backend",
    type: "testing",
    brief: "Mocha is a JavaScript test framework for Node.js programs, featuring browser support, asynchronous testing...",
    img: "img/logos/mocha.png"
  }
]