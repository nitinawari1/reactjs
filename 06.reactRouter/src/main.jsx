import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout.jsx';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import User from './Components/User/User' ;
import Contact from './Components/Contact us/contact';
import Github, { githubinfo } from './Components/Github/Github';
import Admin from './Components/Admin/Admin';
import AdminComponent from './Components/Admin/Admin';

// const router = createBrowserRouter([
//   {
//     path: "/", 
//     element : <Layout />,
//     children: [
//       {
//         path:"", 
//         element : <Home />
//       },
//       {
//         path :"about",
//         element : <About />
//       },
//       {
//         path :"contact-us",
//         element : <Contact />
//       },
//       {
//         path:"admin",
//         element:<Admin />
//       },
//       {
//         path:"github",
//         element: <Github />,
//         loader: githubinfo,
//       }
//     ]
   
//   }
// ])



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />}>
        <Route path='admin' element={<AdminComponent />} />
      </Route>
      <Route path='Contact-us' element={<Contact />} />
      <Route loader={githubinfo} path='github' element={<Github />} />
      <Route path='user/:userid' element={<User />} />
    </Route>
  )
);


{/* // const router = createBrowserRouter (
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}> 
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} >
//         <Route path='admin' element={<Admin />} />
//        </Route>
//       <Route path='contact-us' element ={< Contact />} />
//       <Route path='user/:userid' element ={< User />} />
//       <Route 
//       loader={githubinfo}
//       path='github' element ={<Github />} />
//    </Route>
//       )
//       ) */}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
