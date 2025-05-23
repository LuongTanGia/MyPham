import HangHoaForm from '@components/forms/HangHoa.form'
import HangHoaTable from '@components/tables/HangHoa.table'
import { useHangHoaMutation } from '@controllers/hanghoa.controller'
import { Button, Modal } from 'antd'
import { useState } from 'react'

const HomePage = () => {
  const { data, isFetching } = useHangHoaMutation.DanhSach()

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
      <h1 className='text-xl font-bold p-4'>Hàng hóa mỹ phẩm</h1>
      <div className='w-1/12'>
        <Button onClick={showModal} type='primary'>
          Thêm hàng hóa
        </Button>
      </div>
      <div className='mt-2 overflow-auto'>
        <HangHoaTable data={data || []} loading={isFetching} />
      </div>
      <Modal centered title='Thêm hàng hóa' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <HangHoaForm handleCancel={handleCancel} />
      </Modal>
    </div>
  )
}
export default HomePage
