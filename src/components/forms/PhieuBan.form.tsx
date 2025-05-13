import HangHoaItemTable from '@components/tables/PhieuBan/HangHoaItem.table'
import HangHoaSmallTable from '@components/tables/PhieuBan/HangHoaSmall.table'
import { useHangHoaMutation } from '@controllers/hanghoa.controller'
import { useKhachHangMutation } from '@controllers/khachhang.controller'
import { usePhieuBanMutation } from '@controllers/phieuban.controller'
import type { FormProps } from 'antd'
import { Button, Checkbox, Form, Input, InputNumber, message, Select } from 'antd'
import { useState } from 'react'
import { ReqTypes } from '~types/index'

const PhieuBanForm = ({ handleCancel }: { items: ReqTypes.PhieuBan_Item[]; handleCancel: () => void }) => {
  const [items, setItems] = useState<ReqTypes.PhieuBan_Item[]>([])
  const [form] = Form.useForm()
  const data_KhachHang = useKhachHangMutation.DanhSach_Small()
  const data_HangHoa = useHangHoaMutation.DanhSach_Small()
  console.log('🚀 ~ data_HangHoa:', data_HangHoa.data)

  const Invoices_Them = usePhieuBanMutation.Invoices_Them()
  const onFinish: FormProps<ReqTypes.PhieuBan_Them>['onFinish'] = (values) => {
    console.log('🚀 ~ values:', values)

    Invoices_Them.mutate(
      { customerId: values.customerId, items },
      {
        onSuccess: () => {
          message.success('Thêm phiếu bán thành công!')
          form.resetFields()
          data_KhachHang.refetch()
          data_HangHoa.refetch
          handleCancel()
        }
      }
    )
  }

  return (
    <Form
      form={form}
      name='basic'
      onFinish={onFinish}
      className='w-full !h-full !overflow-auto'
      layout={'vertical'}
      autoComplete='off'>
      <Form.Item<ReqTypes.PhieuBan_Them>
        label='Khách hàng'
        name='customerId'
        rules={[{ required: true, message: 'Vui lòng nhập Khách hàng!' }]}>
        <Select
          placeholder='Select a option and change input text above'
          options={
            data_KhachHang.data
              ? data_KhachHang.data.map((item) => ({ label: item.name.toString(), value: item?.id }))
              : []
          }
          allowClear
        />
      </Form.Item>
      <div className='h-[600px]  mb-8 flex gap-2'>
        <Form.Item<ReqTypes.PhieuBan_Them> label='Hàng hóa khách mua' className='w-1/2 h-full overflow-auto'>
          <HangHoaItemTable data={items || []} loading={data_HangHoa.isLoading} setItems={setItems} />
        </Form.Item>

        <Form.Item<ReqTypes.PhieuBan_Them> label='Hàng hóa kho' name='items' className='w-1/2 h-full overflow-auto'>
          <HangHoaSmallTable
            data={data_HangHoa.data || []}
            loading={data_HangHoa.isLoading}
            setItems={setItems}
            items={items}
          />
        </Form.Item>
      </div>
      <Form.Item label={null} className='flex justify-end'>
        <Button type='primary' htmlType='submit'>
          Xác nhận
        </Button>
      </Form.Item>
    </Form>
  )
}
export default PhieuBanForm
