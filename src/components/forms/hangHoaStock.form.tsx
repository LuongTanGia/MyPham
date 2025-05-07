import React from 'react'
import type { FormProps } from 'antd'
import { Button, Checkbox, Form, Input, InputNumber, message } from 'antd'
import { ReqTypes } from '~types/index'
import { useHangHoaMutation } from '@controllers/hanghoa.controller'

const HangHoaStockForm = ({ handleCancel, type, id }: { id: string; type: 'IN' | 'OUT'; handleCancel: () => void }) => {
  const Products_In = useHangHoaMutation.Products_In()
  const Products_Out = useHangHoaMutation.Products_Out()

  const onFinish: FormProps<ReqTypes.Hanghoa_Sua>['onFinish'] = (values) => {
    type === 'IN'
      ? Products_In.mutate(
          { ...values, productId: id },
          {
            onSuccess: () => {
              message.success('Thêm hàng hóa thành công!')
              handleCancel()
            }
          }
        )
      : Products_Out.mutate(
          { ...values, productId: id },
          {
            onSuccess: () => {
              message.success('Thêm hàng hóa thành công!')
              handleCancel()
            }
          }
        )
  }

  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete='off'>
      <Form.Item<ReqTypes.Hanghoa_Sua>
        label='Số lượng'
        name='quantity'
        rules={[{ required: true, message: 'Vui lòng nhập giá tiền!' }]}>
        <InputNumber className='!w-full' />
      </Form.Item>
      <Form.Item<ReqTypes.Hanghoa_Sua> label='Ghi chú' name='note'>
        <Input.TextArea />
      </Form.Item>

      <Form.Item label={null}>
        <Button type='primary' htmlType='submit'>
          Xác nhận
        </Button>
      </Form.Item>
    </Form>
  )
}
export default HangHoaStockForm
