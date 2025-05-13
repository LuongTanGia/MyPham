import { useAuthMutation } from '@controllers/auth.controller'
import useAuthStore from '@stores/auth.store'
import { Button, Form, FormProps, Input, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ReqTypes } from '~types/index'

const LoginPage = () => {
  const navigate = useNavigate()
  const DangNhap = useAuthMutation.DangNhap()
  const Token = useAuthStore()
  const onFinish: FormProps<ReqTypes.DangNhap>['onFinish'] = async (values) => {
    await DangNhap.mutateAsync(values, {
      onSuccess: (data) => {
        message.success('Đăng nhập thành công')
        Token.setToken(data.token)
        navigate('/')
      }
    })
  }

  return (
    <div>
      <Form name='basic' onFinish={onFinish} layout='vertical' autoComplete='off'>
        <Form.Item<ReqTypes.DangNhap>
          label={<p className='text-nowrap text-base font-bold text-vts_Orange-100'>Tên đăng nhập</p>}
          name='email'
          className='!m-0 !w-full'
          rules={[{ required: true, message: 'Không được để trống tên đăng nhập !' }]}>
          <Input className='border-1 !w-full text-vts_Orange-100 hover:!shadow-orange-600' />
        </Form.Item>

        <Form.Item<ReqTypes.DangNhap>
          label={<p className='text-nowrap  text-base font-bold text-vts_Orange-100'>Mật khẩu</p>}
          name='password'
          className='!m-0 !w-full'
          rules={[{ required: true, message: 'Không được để trống mật khẩu !' }]}>
          <Input.Password className='border-1 !w-full text-vts_Orange-100' />
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='w-full !bg-sky-800 font-semibold mt-2'
            loading={DangNhap.isPending}>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginPage
