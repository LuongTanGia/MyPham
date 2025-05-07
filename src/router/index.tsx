import AuthLayout from '@layouts/AuthLayout'
import ProtectedLayout from '@layouts/ProtectedLayout'
import RootLayout from '@layouts/RootLayout'
import LoginPage from '@pages/auth/LoginPage'
import HomePage from '@pages/HomePage'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <ProtectedLayout />,
        children: [{ path: '/', element: <HomePage /> }]
      },
      {
        element: <AuthLayout />,
        children: [{ path: '/login', element: <LoginPage /> }]
      },
      { path: '*', element: <p>Không tìm thấy</p> }
    ]
  }
])
