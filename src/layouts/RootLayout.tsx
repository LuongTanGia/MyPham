import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { Layout, theme } from 'antd'

const RootLayout: React.FC = () => {
  return (
    <div className='flex h-full w-full flex-col overflow-hidden'>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  )
}
export default RootLayout
