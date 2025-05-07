import React from 'react'
import type { FormProps } from 'antd'
import { Button, Checkbox, Form, Input, InputNumber, message } from 'antd'
import { ReqTypes } from '~types/index'
import { useHangHoaMutation } from '@controllers/hanghoa.controller'

const HangHoaForm = ({ handleCancel }: { handleCancel: () => void }) => {
  const Products_Add = useHangHoaMutation.Products_Add()

  const onFinish: FormProps<ReqTypes.Hanghoa_Them>['onFinish'] = (values) => {
    Products_Add.mutate(values, {
      onSuccess: () => {
        message.success('Thêm hàng hóa thành công!')
        handleCancel()
      }
    })
  }

  return (
    <Form name='basic' labelCol={{ span: 8 }} initialValues={{ remember: true }} onFinish={onFinish} autoComplete='off'>
      <Form.Item<ReqTypes.Hanghoa_Them>
        label='Tên hàng hóa'
        hasFeedback
        name='name'
        rules={[
          { required: true, message: 'Không được để trống!' },
          { max: 250, message: 'Không được quá 250 ký tự !' },
          { pattern: /^[\p{L}\d\s]+$/u, message: 'Không được chứa ký tự đặc biệt!' }
        ]}>
        <Input />
      </Form.Item>

      <Form.Item<ReqTypes.Hanghoa_Them>
        label='Nhóm hàng hóa'
        name='category'
        hasFeedback
        rules={[
          { required: true, message: 'Không được để trống!' },
          { max: 150, message: 'Không được quá 150 ký tự !' },
          { pattern: /^[\p{L}\d\s]+$/u, message: 'Không được chứa ký tự đặc biệt!' }
        ]}>
        <Input />
      </Form.Item>

      <Form.Item<ReqTypes.Hanghoa_Them> label='Thông tin thêm' name='description'>
        <Input.TextArea />
      </Form.Item>

      <Form.Item<ReqTypes.Hanghoa_Them>
        label='Giá tiền'
        name='price'
        hasFeedback
        className='w-full'
        rules={[
          { required: true, message: 'Vui lòng nhập giá tiền!' },
          { type: 'number', min: 1, message: 'Giá tiền phải lớn hơn 0!' }
        ]}>
        <InputNumber type='number' className='!w-full' />
      </Form.Item>

      <Form.Item<ReqTypes.Hanghoa_Them>
        label='Số lượng'
        name='stock'
        hasFeedback
        className='w-full'
        rules={[
          { required: true, message: 'Vui lòng nhập số lượng!' },
          { type: 'number', min: 1, message: 'Số lượng phải lớn hơn 0!' }
        ]}>
        <InputNumber type='number' className='!w-full' />
      </Form.Item>

      <Form.Item label={null}>
        <Button type='primary' htmlType='submit'>
          Xác nhận
        </Button>
      </Form.Item>
    </Form>
  )
}
export default HangHoaForm
