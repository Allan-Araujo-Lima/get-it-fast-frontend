import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import { LayoutExp } from './layout'
import { Home } from './pages/home'
import { Sobre } from './pages/sobre'
import { Loja } from './pages/loja'
import { Cadastro } from './pages/cadastro'
import { Ajuda } from './pages/ajuda'
import { Login } from './pages/login'
import { UserRegister } from './pages/register'
import { AuthProvider } from './providers/auth'
import { ProtectedPages } from './components/ProtectedPages';

import "antd/dist/reset.css";
import './index.css'

const router = createBrowserRouter([
  {
    path: "painel",
    element: <ProtectedPages element={LayoutExp} validadePage={true} />,
    children: [
      {
        path: "",
        element: <Loja />
      },
      {
        path: "cadastro",
        element: <Cadastro />
      },
    ]
  },
  {
    element: <LayoutExp />,
    children: [{
      path: "/",
      element: <Home />
    },
    {
      path: "/sobre",
      element: <Sobre />
    },
    {
      path: "/ajuda",
      element: <Ajuda />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/registro",
      element: <UserRegister />
    }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);