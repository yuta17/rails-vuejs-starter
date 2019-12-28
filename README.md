# Setting up Rails with Vue.js, Webpack, Turbolinks

A quick and easy way to setup Rails + Vue.js + Webpack + Turbolinks + Rspec + Jest.

- Ruby version: 2.6.5
- Key Dependencies: Rails 6, Vue.js 2, Webpack 4
- System dependencies: Node.js, Yarn, PostgreSQL

## Setup development environment:

```
cd ./rails-vuejs-starter

rails db:create
bundle install
yarn install
yarn run watch
rails s
open "http://localhost:3000"
```

![helloworld](https://user-images.githubusercontent.com/8072432/71537822-ef828c00-2964-11ea-8fd9-4ed9d9c49d83.png)
