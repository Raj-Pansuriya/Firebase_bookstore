# Firebase Bookstore
This project entailed creating a simple bookstore to understand & use CRUD operations in firebase_9

## Setup

### WebPack setup
WebPack is a javascript module which does tasks such as bundling all imported code modules, removing unused code etc.
To setup WebPack, Follow the steps below
1. In your project directory create a new directory named `src` which is where all of our javascript code is gonna live.

2. Inside it, make a `idnex.js` file which will be our javascript entry file.

3. Create a `dist` directory. This is where our final bundled javascript code is gonna live.

4. Open a terminal and follow the steps below

```
npm init
```
It will create a `package.json` file to keep track of all the dependancies and packages.


```
npm i webpack webpack-cli -D
```
Will install webpack and webpack-cli

5. Make a `webpack.config.js` inside the root of your project. Paste the below code in it.
```
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true
}
```

The file above is meant so that WebPack will look at `./src/index.js` as entry point for javascript code and bundle the code in a file called `bundle.js` inside `dist` directory

6. Inside `package.json` file, add a property named `build` inside `scripts` and give it a value of `webpack`. After this step, your file should look like below
```
{
  "name": "firebase-9-dojo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.72.0",
    "webpack-cli": "^4.9.2"
  },
  "dependencies": {
    "firebase": "^9.6.10"
  }
}
```
7. Final step to bundle the JS code
```
npm run build
```
This will run the script and a new file will be added in our dist folder by the name `bundle.js`. Remeber to include this new file in your HTML code and not the index.js

### Firebase setup
Add your project's config object in `src/index.js` file