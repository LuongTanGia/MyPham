import { Button, Modal, Table, TableColumnsType } from 'antd'
import { ResTypes } from '~types/index'
import HangHoaChiTietTable from './HangHoaChiTiet.table'
import NumberFormat from '@components/formats/Number.format'
import { useState } from 'react'
import HangHoaStockForm from '@components/forms/hangHoaStock.form'
import { useHangHoaMutation } from '@controllers/hanghoa.controller'
import KhachHangUpdate from '@components/forms/KhachHangUpdate.form'
import KhacHangChiTietTable from './KhachHangChiTiet.table'

const KhachHangTable = ({ data, loading }: { data: ResTypes.KhacHang_DanhSach; loading: boolean }) => {
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
  const columns: TableColumnsType<ResTypes.KhacHang_DataResult> = [
    { title: <p>Tên khách hàng</p>, dataIndex: 'name', key: 'name' },
    // { title: 'Nhóm hàng', dataIndex: 'category', key: 'category' },
    {
      title: <p>Email</p>,
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: <p>Số điện thoại</p>,
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: <p>Công nợ</p>,
      dataIndex: 'debt',
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
      render: (_, record: ResTypes.KhacHang_DataResult) => (
        <div className='display flex gap-2 justify-center'>
          <Button type='primary' size='small' onClick={() => showModal('IN', record._id)}>
            Trả nợ
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
      <Table<ResTypes.KhacHang_DataResult>
        columns={columns}
        expandable={{
          expandedRowRender: (record) =>
            record.transactions.length !== 0 && (
              <div>
                <p className='text-base mb-2 font-bold text-center'>Chi tiết: {record.name}</p>
                <KhacHangChiTietTable data={record.transactions || []} loading={false} />
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
        <KhachHangUpdate handleCancel={handleCancel} type={type} id={id} />
      </Modal>
    </div>
  )
}

export default KhachHangTable

// export defaultKhachHangaTable
