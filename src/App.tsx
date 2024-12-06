import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from './pages/layout'
import { Home } from './pages/home'
import { Login } from './pages/login'

import "../src/globals/style.css"
import { Registro } from './pages/registro'
import { AuthenticationProvider } from './context/authentication'
import { Produto } from './pages/criarProduto'
import { Toaster } from './components/ui/toaster'
import { Mercado } from './pages/mercado'
import PrivateRoute from './components/wrapper'

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
    },
    {
      path: "/mercado",
      element: <Mercado />
    },
    {
      path: "/produto/novo",
      element:
        <PrivateRoute>
          <Produto />
        </PrivateRoute>
    }
  ])

  return (
    <AuthenticationProvider>
      <RouterProvider router={pages} />
      <Toaster />
    </AuthenticationProvider>
  )
}

export default App;

