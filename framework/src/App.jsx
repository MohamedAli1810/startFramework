import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/Home/About/About'
import Portfolio from './components/Home/Portfolio/Portfolio'
import Contact from './components/Home/Contact/Contact'
import Layout from './components/Layout/Layout'

let x = createBrowserRouter([
  {path:'', element : <Layout/>,children:[
  {path:'', element : <Home/>},
  {path:'about', element : <About/>},
  {path:'portfolio', element : <Portfolio/>},
  {path:'contact', element : <Contact/>},
  ]}
])
function App() {
  const [count, setCount] = useState(0)

  return <>
    <RouterProvider router={x}></RouterProvider>
    </>
 
}

export default App
