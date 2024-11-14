import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from './pages/layout'
import { Home } from './pages/home'
import { Login } from './pages/login'

import "../src/globals/style.css"

function App() {

  const pages = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    }
  ])

  return (
    <RouterProvider router={pages} />
  )
}

export default App;

