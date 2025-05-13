import React from 'react'
import type { FormProps } from 'antd'
import { Button, Checkbox, Form, Input, InputNumber, message } from 'antd'
import { ReqTypes } from '~types/index'
import { useHangHoaMutation } from '@controllers/hanghoa.controller'
import { useKhachHangMutation } from '@controllers/khachhang.controller'

const KhachHangForm = ({ handleCancel }: { handleCancel: () => void }) => {
  const Customers_Add = useKhachHangMutation.Customers_Add()
  const [form] = Form.useForm()
  const onFinish: FormProps<ReqTypes.KhachHang_Them>['onFinish'] = (values) => {
    Customers_Add.mutate(values, {
      onSuccess: () => {
        message.success('Thêm khách hàng thành công!')
        form.resetFields()
        handleCancel()
      }
    })
  }

  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      form={form}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete='off'>
      <Form.Item<ReqTypes.KhachHang_Them>
        label='Tên khách hàng'
        hasFeedback
        name='name'
        rules={[
          { required: true, message: 'Không được để trống!' },
          { max: 250, message: 'Không được quá 250 ký tự !' },
          { pattern: /^[\p{L}\d\s]+$/u, message: 'Không được chứa ký tự đặc biệt!' }
        ]}>
        <Input />
      </Form.Item>

      <Form.Item<ReqTypes.KhachHang_Them>
        label='Email'
        name='email'
        hasFeedback
        rules={[
          { required: true, message: 'Không được để trống!' },
          { max: 150, message: 'Không được quá 150 ký tự !' },
          { type: 'email', message: 'Email không hợp lệ!' }
        ]}>
        <Input />
      </Form.Item>

      <Form.Item<ReqTypes.KhachHang_Them>
        label='Số điện thoại'
        name='phone'
        hasFeedback
        rules={[
          { required: true, message: 'Không được để trống!' },
          { max: 150, message: 'Không được quá 150 ký tự !' },
          { pattern: /^[\p{L}\d\s]+$/u, message: 'Không được chứa ký tự đặc biệt!' }
        ]}>
        <Input />
      </Form.Item>
      <Form.Item<ReqTypes.KhachHang_Them>
        label='Địa chỉ'
        name='address'
        hasFeedback
        rules={[
          { required: true, message: 'Không được để trống!' },
          { max: 150, message: 'Không được quá 150 ký tự !' },
          { pattern: /^[\p{L}\d\s]+$/u, message: 'Không được chứa ký tự đặc biệt!' }
        ]}>
        <Input />
      </Form.Item>

      <Form.Item label={null}>
        <Button type='primary' htmlType='submit'>
          Xác nhận
        </Button>
      </Form.Item>
    </Form>
  )
}
export default KhachHangForm
