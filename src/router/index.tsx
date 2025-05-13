import AuthLayout from '@layouts/AuthLayout'
import ProtectedLayout from '@layouts/ProtectedLayout'
import RootLayout from '@layouts/RootLayout'
import LoginPage from '@pages/auth/LoginPage'
import HomePage from '@pages/HomePage'
import KhachHangPage from '@pages/KhachHangPage'
import PhieuBanPage from '@pages/PhieuBanPage'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <ProtectedLayout />,
        children: [
          { path: '/', element: <HomePage /> },
          { path: '/Khach-hang', element: <KhachHangPage /> },
          { path: '/Phieu-ban', element: <PhieuBanPage /> },

          { path: '*', element: <p>Không tìm thấy</p> }
        ]
      },
      {
        element: <AuthLayout />,
        children: [{ path: '/login', element: <LoginPage /> }]
      }
    ]
  }
])
