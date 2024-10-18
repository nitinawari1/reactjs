import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';

import Script from "./script";
//we can define function here but we don't define for cleaniness
function App() {
  return (
    <>
   <h1> Hello World</h1>
   < Script />
    </>
  );
}
function MyApp() {
  return (
    <>
   <h1> Hello World | me</h1>
   < Script />
    </>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // MyApp() we can execute function like that but we don't because of industry standard
    <MyApp />
    // <App />
);


