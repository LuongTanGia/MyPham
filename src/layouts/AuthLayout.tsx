import { Outlet, useNavigate } from 'react-router-dom'
import { Suspense } from 'react'

const AuthLayout = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-dark-200'>
      <div className='m-auto h-fit w-[450px] rounded-md bg-white px-8 py-10 shadow-md'>
        <div className='m-auto flex w-full flex-col items-center justify-center'>
          <p className='text-vts_Orange-100 my-2 text-2xl font-bold'>VTS - Thông tin nhân viên</p>
        </div>
        <Suspense fallback={<p>loading...</p>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}
export default AuthLayout
