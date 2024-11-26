import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from './pages/layout'
import { Home } from './pages/home'
import { Login } from './pages/login'

import "../src/globals/style.css"
import { Registro } from './pages/registro'
import { AuthenticationProvider } from './context/authentication'

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
    },
    {
      path: "/registro",
      element: <Registro />
    }
  ])

  return (
    <AuthenticationProvider>
      <RouterProvider router={pages} />
    </AuthenticationProvider>
  )
}

export default App;

