/* eslint-disable react-hooks/exhaustive-deps */

import { Outlet } from 'react-router-dom'
import HeaderLayout from './HeaderLayout'
import FooterLayout from './FooterLayout'
import Siderbar from '@components/Siderbar'

const ProtectedLayout = () => {
  return (
    <div className={`flex h-full w-full flex-col`}>
      <HeaderLayout />
      <div className={`flex flex-1 gap-1  h-full w-full overflow-hidden`}>
        <Siderbar />
        <div className='flex flex-col w-full overflow-hidden'>
          <Outlet />
          <FooterLayout />
        </div>
      </div>
    </div>
  )
}
export default ProtectedLayout
