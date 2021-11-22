10:16 22.11.2021
Umumiy : 
Kerakli dasturlar o'rnatiladi  { 
Node.js , 
Git(https://git-scm.com/downloads), 
Visual Studio Code , 
}

birinchi kun
1 Kearki package lar o'rnaltiladi {
npx create-react-app <project name >  , 
va package.json dan portno 4000 ga ozgartirib qoyqamiz chunki backend 3000 port bogani uchun(set PORT=4000 && react-script start)
npm install react-bootstrap bootstrap@5.1.3 , 
va CDN link orqali chaqiramiz (
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
),
npm install --save react-router-dom
google fonts dan kerakli font ni olamiz
va papkalar ichidagi fayllarni ichini tozzalab olamiz
2 project boshlanandi 
bunda biz project qanday bolishi va qanday papka va faylarni oz ichiga olish va nomlar ozaro bogliq boladi
   components
        header
          index.js navbardagi malumotlar header papka si orqali 
        Layout
          index.js ichida header boladi
        UI
          Input
            index.js kerak kod kamayishi uchun va inputlar ichidagi Label ,  Value , Placeholder, Onchange , Type kabi narsalar Input faylini ichidan props shaklida kelishi kerak

   containers  
     home 
       index.js shunda biz navabarni barcha sahifalarda Layout papkasi orqali chaira olamiz
     signup
       index.js shunda biz navabarni barcha sahifalarda Layout papkasi orqali chaira olamiz(
           bularni ichiga ham Form larni joylab olamiz
)
       
     signin
       index.js shunda biz navabarni barcha sahifalarda Layout papkasi orqali chaira olamiz (
           bularni ichiga ham Form larni joylab olamiz

)

   App.js da esa biz sahifani react-router dom dagi {BrowserRouter as Router, Route, Routes } qolab SPA yasab olamiz

 3. Malumotni oslish react-redux ni ishlatish
    npm install redux react-redux redux-thunk --save   
      redux-thunk(bu bizga dispatch va getState metodlarni ishatishga yordam beradi)


 4. Actions
      auth.action.js bu fayllar nima vazifa bacharishini yaozganimizdan keyin 
      constants.js   bu fayllar nima vazifa bacharishini yaozganimizdan keyin 
      index.js  orqali barcha faylda ishlashini belgilab qoyamiz (export * from './auth.actions';

    Store
      index.js ichida createStore() finction ishlatiladi
    Reducers
     index.js
     auth.reducers.js 
   App,js da esa Provider ishlatamiz
   

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
