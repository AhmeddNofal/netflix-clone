import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';
// import { seedDatabase } from './seed';


ReactDOM.render(
  <>
  <FirebaseContext.Provider value={{ firebase }}>
    <GlobalStyles/>
    <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);

// seedDatabase(firebase);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

