import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import dayjs from 'dayjs'
import 'dayjs/locale/vi'
import updateLocale from 'dayjs/plugin/updateLocale'
import './index.css'
import { message } from 'antd'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'dayjs/locale/vi' // Import ngôn ngữ tiếng Việt
import localizedFormat from 'dayjs/plugin/localizedFormat'
import RootLayout from '@layouts/RootLayout'
import ProtectedLayout from '@layouts/ProtectedLayout'
import HomePage from '@pages/HomePage'
import AuthLayout from '@layouts/AuthLayout'
import LoginPage from '@pages/auth/LoginPage'
import '@ant-design/v5-patch-for-react-19'
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: '/',
            element: <HomePage />
          }
        ]
      },

      {
        element: <AuthLayout />,
        children: [
          {
            path: '/login',
            element: <LoginPage />
          }
        ]
      }
    ]
  }
])
dayjs.extend(updateLocale)
dayjs.updateLocale('vi', {
  weekStart: 0
})
dayjs.extend(localizedFormat)
dayjs.locale('vi')
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 5,
      retryDelay: 1000,
      refetchOnWindowFocus: false, // 👈 Không gọi lại khi chuyển tab
      refetchOnReconnect: false, // 👈 Không gọi lại khi reconnect mạng
      refetchOnMount: false, // 👈 Không gọi lại khi component mount                    // 👈 Retry tối đa 1 lần (tuỳ mày)
      staleTime: 1000 * 60 * 5
    } // 👈 Cache sống 5 phút (tuỳ mày) } }
  }
})
message.config({ duration: 3, maxCount: 1 })
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)
