import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'about',
        element:<About></About>
      },
      {
       
      }
    ]
  },
  {path:'/',
  element:'hello'
}

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider
   router={router}
   ></RouterProvider>
  </React.StrictMode>,
)
