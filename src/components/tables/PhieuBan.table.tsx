import { Button, Modal, Table, TableColumnsType } from 'antd'
import { ResTypes } from '~types/index'
import HangHoaChiTietTable from './HangHoaChiTiet.table'
import NumberFormat from '@components/formats/Number.format'
import { useState } from 'react'
import HangHoaStockForm from '@components/forms/hangHoaStock.form'
import { useHangHoaMutation } from '@controllers/hanghoa.controller'
import PhieuBanChiTietTable from './PhieuBanChiTiet.table'

const PhieuBanTable = ({ data, loading }: { data: ResTypes.PhieuBan_DanhSach; loading: boolean }) => {
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
  const columns: TableColumnsType<ResTypes.PhieuBan_DataResult> = [
    { title: <p>ID</p>, dataIndex: '_id', key: '_id' },
    { title: 'Khách hang', dataIndex: 'customerName', key: 'customerName' },
    {
      title: <p>Tổng tiền</p>,
      dataIndex: 'totalAmount',
      key: 'totalAmount',
      render: (text: number) => (
        <div className='text-right'>
          <NumberFormat number={text} type='SOLESOTIEN' />
        </div>
      )
    },
    { title: 'Người tạo', dataIndex: 'issuedBy', key: 'issuedBy' },

    {
      title: '',
      dataIndex: 'actions',
      key: 'actions',
      width: 200,
      render: (_, record: ResTypes.PhieuBan_DataResult) => (
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
      <Table<ResTypes.PhieuBan_DataResult>
        columns={columns}
        expandable={{
          expandedRowRender: (record) =>
            record.items.length !== 0 && (
              <div>
                <p className='text-base mb-2 font-bold text-center'>
                  Chi tiết: <NumberFormat number={record.totalAmount} type='SOLESOTIEN' />
                </p>
                <PhieuBanChiTietTable data={record.items || []} loading={false} />
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

export default PhieuBanTable
