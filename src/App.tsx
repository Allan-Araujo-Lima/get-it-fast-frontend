import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from './pages/layout'
import { Home } from './pages/home'

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
    }
  ])

  return (
    <RouterProvider router={pages} />
  )
}

export default App;

