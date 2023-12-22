import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Github from './components/Github.jsx'
import Layout from './Layout.jsx'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// React Routing - 1st way


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout></Layout>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])


// React Routing - 2nd way
const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='github' element={<Github />}/>
    </Route>
  )
)


function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
