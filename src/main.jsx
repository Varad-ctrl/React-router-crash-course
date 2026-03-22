import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Home from './components/Home/Home.jsx'
import Layout from './hoc/layout.jsx'
// import About from './components/About/About.jsx'

import { Home, About, Contact, Github } from './components'
import UserComp from './components/UserComp/UserComp.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//         path: "github",
//         element: <Github />
//       },
//       {
//         path: "*",
//         element: <h1>404 Page Not Found</h1>
//       }
//     ]
//   }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='github' element={<Github />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:id' element={<UserComp />} />

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
