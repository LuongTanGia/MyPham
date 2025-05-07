/* eslint-disable react-hooks/exhaustive-deps */

import { Outlet } from 'react-router-dom'
import HeaderLayout from './HeaderLayout'
import FooterLayout from './FooterLayout'

const ProtectedLayout = () => {
  return (
    <div className={`flex h-full w-full flex-col`}>
      <HeaderLayout />

      <div className={`flex flex-1 gap-1 h-full w-full flex-col overflow-hidden`}>
        <Outlet />
      </div>

      <FooterLayout />
    </div>
  )
}
export default ProtectedLayout
