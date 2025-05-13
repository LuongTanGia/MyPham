import KhachHangForm from '@components/forms/KhachHang.form'
import KhachHangTable from '@components/tables/KhachHang.table'
import { useKhachHangMutation } from '@controllers/khachhang.controller'
import { Button, Modal } from 'antd'
import { useState } from 'react'

const KhachHangPage = () => {
  const { data, isFetching } = useKhachHangMutation.DanhSach()

  console.log('🚀 ~ data:', data)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <div className='flex flex-col h-full w-full overflow-hidden'>
      <h1 className='text-xl font-bold p-4'>Khách hàng</h1>
      <div className='w-1/12'>
        <Button onClick={showModal} type='primary'>
          Thêm hàng hóa
        </Button>
      </div>
      <div className='mt-2 overflow-auto'>
        <KhachHangTable data={data || []} loading={isFetching} />
      </div>
      <Modal centered title='Thêm hàng hóa' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <KhachHangForm handleCancel={handleCancel} />
      </Modal>
    </div>
  )
}
export default KhachHangPage
