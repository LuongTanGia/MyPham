import PhieuBanForm from '@components/forms/PhieuBan.form'
import KhachHangTable from '@components/tables/KhachHang.table'
import PhieuBanTable from '@components/tables/PhieuBan.table'
import { usePhieuBanMutation } from '@controllers/phieuban.controller'
import { Button, Modal } from 'antd'
import { useState } from 'react'

const PhieuBanPage = () => {
  const { data, isFetching } = usePhieuBanMutation.DanhSach()

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
      <h1 className='text-xl font-bold p-4'>Phiếu bán</h1>
      <div className='w-1/12'>
        <Button onClick={showModal} type='primary'>
          Thêm phiếu
        </Button>
      </div>
      <div className='mt-2 overflow-auto'>
        <PhieuBanTable data={data || []} loading={isFetching} />
      </div>
      <Modal
        centered
        title='Thêm hàng hóa'
        width={'90%'}
        height={'90%'}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}>
        <PhieuBanForm handleCancel={handleCancel} items={[]} key={new Date().toString()} />
      </Modal>
    </div>
  )
}
export default PhieuBanPage
