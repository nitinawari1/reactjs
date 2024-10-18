import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const ElementVarible = 'Nitin'

// here the process how react expect parameters
const reactElement = React.createElement(
  'a',
  {href:'https://google.com' , target:'_blank'},
  'click me to visit google' , 
  // we can add variable after tree complete 
  ElementVarible // these is a variable
)

//we can give a tag like that and react will  execute properly 
// const MyApp = (
//     <a href='https://google.com' target='_blank'>click for google</a>
// )

  ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement // we can execute function like object
      // <App />
    
  )
