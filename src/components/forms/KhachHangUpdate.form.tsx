import type { FormProps } from 'antd'
import { Button, Form, Input, InputNumber, message } from 'antd'
import { ReqTypes } from '~types/index'
import { useKhachHangMutation } from '@controllers/khachhang.controller'

const KhachHangUpdate = ({ handleCancel, type, id }: { id: string; type: 'IN' | 'OUT'; handleCancel: () => void }) => {
  const Update = useKhachHangMutation.Customers_Update()

  const onFinish: FormProps<ReqTypes.KhachHang_Sua>['onFinish'] = (values) => {
    Update.mutate(
      { ...values, customerId: id },
      {
        onSuccess: () => {
          message.success('Điều chỉnh thành công!')
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
      <Form.Item<ReqTypes.KhachHang_Sua>
        label='Số tiền'
        name='total'
        rules={[{ required: true, message: 'Vui lòng nhập giá tiền!' }]}>
        <InputNumber className='!w-full' />
      </Form.Item>
      <Form.Item<ReqTypes.KhachHang_Sua> label='Ghi chú' name='note'>
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
export default KhachHangUpdate
