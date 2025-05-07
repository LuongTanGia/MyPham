import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { message } from 'antd'

import RootLayout from '@layouts/RootLayout'
import ProtectedLayout from '@layouts/ProtectedLayout'
import AuthLayout from '@layouts/AuthLayout'

import HomePage from '@pages/HomePage'
import LoginPage from '@pages/auth/LoginPage'

import dayjs from 'dayjs'
import 'dayjs/locale/vi'
import updateLocale from 'dayjs/plugin/updateLocale'
import localizedFormat from 'dayjs/plugin/localizedFormat'

import './index.css'
import '@ant-design/v5-patch-for-react-19'
import { router } from './router'

// DayJS setup
dayjs.extend(updateLocale)
dayjs.extend(localizedFormat)
dayjs.updateLocale('vi', { weekStart: 0 })
dayjs.locale('vi')

// QueryClient setup
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: 1000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      staleTime: 1000 * 60 * 5
    }
  }
})

// Router

// AntD global config
message.config({ duration: 3, maxCount: 1 })

// Render app
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)
