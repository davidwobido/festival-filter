
<img width="30%" align="right" alt="logo" src="https://festival-filter.herokuapp.com/assets/FF_Logo_large.84373c15.svg">


# Festival Filter 

Find your favourite festivals. With the filter function, a festival rating is calculated based on selected genres to suggest the festivals that best suit you. The overview page offers the possibility to browse through all festivals or to search for specific ones. The detail pages present information such as the line up or the number of visitors.

### You can test the app here:

https://festival-filter.herokuapp.com/

## 💻 Installing / Developing

At first start with cloning this repository

Now you are ready to go:

```shell
npm install
```

This will install the dependencies required to run the boilerplate.

```shell
npm run dev
```

These scripts run your server, client and storybook in development mode.

The default PORTS are:

- `3001` for the server
- `3000` for the client
- `6006` for the storybook

You can also run them with individually:

```shell
npm run client:dev: Runs the app in dev in the browser. Changes will automatically be shown. You can check erros in console.
npm run server:dev: Runs the server in devt mode.
npm run storybook: Runs storybook in dev mode.
npm run dev: Uses concurrently to run your server, client and storybook all at once in dev mode.
```


You can configure the server port by setting the `PORT` environment variable. Creating a `.env` file is supported. You can copy `.env.example` to `.env`.

| KEY  | VALUE                                                         |
| ---- | ------------------------------------------------------------- |
| PORT | (Optional) Port for the server environment (defaults to 3001) |

## 🧱 Building

To build the project, run:

```shell
npm run build
```

This will build the client, server and storybook.

```shell
npm start
```

In production, you have a single server serving everything.

`/api/*` is the API endpoint.  
`/storybook` is the Storybook.  
`/*` is the client.

## 🚧 Tests

A test runner is not installed. But TypeScript, linter and prettier are checked on commit and push thanks to husky and lintstaged.

## 📚 Used Technologies

### Built With

<img width="3%" alt="logo" src="https://user-images.githubusercontent.com/81613530/124288016-fb9a6b80-db50-11eb-894b-46220c096ee8.png"
 /> [React](https://reactjs.org/)

### Tech Stack

- [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](http://expressjs.com/)
- [Node.js](https://nodejs.org)
- [Storybook](https://storybook.js.org/)
- [Heroku](https://www.heroku.com)
- [dotenv](https://github.com/motdotla/dotenv)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Husky](https://github.com/typicode/husky)
- [Lint-Staged](https://github.com/okonet/lint-staged)
- [Concurrently](https://www.npmjs.com/package/concurrently)
- [Lottie Files](https://lottiefiles.com/)
