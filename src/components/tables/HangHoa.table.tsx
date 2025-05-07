import { Button, Modal, Table, TableColumnsType } from 'antd'
import { ResTypes } from '~types/index'
import HangHoaChiTietTable from './HangHoaChiTiet.table'
import NumberFormat from '@components/formats/Number.format'
import { useState } from 'react'
import HangHoaStockForm from '@components/forms/hangHoaStock.form'
import { useHangHoaMutation } from '@controllers/hanghoa.controller'

const HangHoaTable = ({ data, loading }: { data: ResTypes.Hanghoa_DanhSach; loading: boolean }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [type, setType] = useState<'IN' | 'OUT'>('IN')
  const [id, setId] = useState('')
  const Products_Delete = useHangHoaMutation.Products_Delete()
  const showModal = (type: 'IN' | 'OUT', id: string) => {
    setIsModalOpen(true)
    setType(type)
    setId(id)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const columns: TableColumnsType<ResTypes.Hanghoa_DataResult> = [
    { title: 'Tên hàng', dataIndex: 'name', key: 'name' },
    { title: 'Nhóm hàng', dataIndex: 'category', key: 'category' },
    {
      title: 'Đã bán',
      dataIndex: 'sold',
      key: 'sold',
      render: (text: number) => (
        <div className='text-right'>
          <NumberFormat number={text} type='SOLESOTIEN' />
        </div>
      )
    },
    {
      title: 'Tồn kho',
      dataIndex: 'stock',
      key: 'stock',
      render: (text: number) => (
        <div className='text-right'>
          <NumberFormat number={text} type='SOLESOTIEN' />
        </div>
      )
    },
    {
      title: 'Giá tiền',
      dataIndex: 'price',
      key: 'price',
      render: (text: number) => (
        <div className='text-right'>
          <NumberFormat number={text} type='SOLESOTIEN' />
        </div>
      )
    },
    {
      title: '',
      dataIndex: 'actions',
      key: 'actions',
      width: 200,
      render: (_, record: ResTypes.Hanghoa_DataResult) => (
        <div className='display flex gap-2 justify-center'>
          <Button type='primary' size='small' onClick={() => showModal('IN', record._id)}>
            Nhập hàng
          </Button>
          <Button type='default' size='small' onClick={() => showModal('OUT', record._id)} danger>
            Xuất hàng
          </Button>
          <Button type='default' size='small' onClick={() => Products_Delete.mutate(record._id, {})} danger>
            Xóa
          </Button>
        </div>
      )
    }
  ]
  return (
    <div>
      <Table<ResTypes.Hanghoa_DataResult>
        columns={columns}
        expandable={{
          expandedRowRender: (record) =>
            record.transactions.length !== 0 && (
              <div>
                <p className='text-base mb-2 font-bold text-center'>Chi tiết: {record.name}</p>
                <HangHoaChiTietTable data={record.transactions || []} loading={false} />
              </div>
            )
        }}
        loading={loading}
        dataSource={data}
        pagination={false}
        rowKey={(record) => record._id}
      />
      <Modal
        centered
        title={type === 'IN' ? 'Nhập hàng' : 'Xuất hàng'}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}>
        <HangHoaStockForm handleCancel={handleCancel} type={type} id={id} />
      </Modal>
    </div>
  )
}

export default HangHoaTable
