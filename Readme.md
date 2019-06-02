# coderelm-express-mvc 

> Supercharged Express Generator with below features

* [Express Js](https://expressjs.com/) with MVC code base.
* [Sequalize ORM](http://docs.sequelizejs.com/)
* [Nunjucks template engine](https://mozilla.github.io/nunjucks/) 
* Testing framework [Jest](https://jestjs.io/) and [Puppeteer](https://github.com/GoogleChrome/puppeteer)
* [GraphQl](https://graphql.org/)

> PreConfigured Singlepage application setup using.

* ES6 Webpack
* Vue
* React

## Getting Started

Change database connection in `db/config/config.json` this is your sequalize connection config file.

Start the project using below command.

```bash
npm start  or yarn start
```

We have integrated GraphQl as default feature so once the server start you can view the GraphQl playground in below
url

```bash
http://localhost:3000/api/
```

GraphQl schema and resolver can be found in below folder path in your project.

```bash
plugins/GraphQl
```
