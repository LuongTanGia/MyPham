import { Button, Modal, Table, TableColumnsType } from 'antd'
import { ReqTypes, ResTypes } from '~types/index'
import NumberFormat from '@components/formats/Number.format'
import { useState } from 'react'
import HangHoaStockForm from '@components/forms/hangHoaStock.form'
import { useHangHoaMutation } from '@controllers/hanghoa.controller'

const HangHoaItemTable = ({
  data,
  loading,
  setItems
}: {
  data: ReqTypes.PhieuBan_Item[]
  loading: boolean
  setItems: (a: ReqTypes.PhieuBan_Item[]) => void
}) => {
  const columns: TableColumnsType<ReqTypes.PhieuBan_Item> = [
    { title: <p className='text-nowrap'>Tên hàng</p>, dataIndex: 'productName', key: 'productName' },
    // { title: 'Nhóm hàng', dataIndex: 'category', key: 'category' },
    {
      title: <p className='text-nowrap'>Số lượng</p>,
      dataIndex: 'quantity',
      key: 'quantity',
      render: (text: number) => (
        <div className='text-right'>
          <NumberFormat number={text} type='SOLESOTIEN' />
        </div>
      )
    },
    {
      title: <p className='text-nowrap'>Giá bán</p>,
      dataIndex: 'price',
      key: 'price',
      render: (text: number) => (
        <div className='text-right'>
          <NumberFormat number={text} type='SOLESOTIEN' />
        </div>
      )
    },
    {
      title: <p className='text-nowrap'>Tổng tiền hàng</p>,
      dataIndex: 'total',
      key: 'total',
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

      render: (_, record: ReqTypes.PhieuBan_Item) => (
        <div className='display flex gap-2 justify-center'>
          <Button
            type='primary'
            danger
            size='small'
            onClick={() => {
              const updatedData = data.filter((item) => item.productId !== record.productId)
              setItems(updatedData)
            }}>
            Xóa
          </Button>
        </div>
      )
    }
  ]
  return (
    <Table<ReqTypes.PhieuBan_Item>
      columns={columns}
      loading={loading}
      dataSource={data}
      pagination={false}
      rowKey={(record) => record.productId}
    />
  )
}

export default HangHoaItemTable
