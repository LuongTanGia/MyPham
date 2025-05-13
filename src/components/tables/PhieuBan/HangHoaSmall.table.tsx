import { Button, Modal, Table, TableColumnsType } from 'antd'
import { ReqTypes, ResTypes } from '~types/index'
import NumberFormat from '@components/formats/Number.format'
import { useState } from 'react'
import HangHoaStockForm from '@components/forms/hangHoaStock.form'
import { useHangHoaMutation } from '@controllers/hanghoa.controller'

const HangHoaSmallTable = ({
  data,
  loading,
  setItems,
  items
}: {
  data: ResTypes.Hanghoa_DanhSach
  loading: boolean
  items: ReqTypes.PhieuBan_Item[]
  setItems: (a: ReqTypes.PhieuBan_Item[]) => void
}) => {
  const columns: TableColumnsType<ResTypes.Hanghoa_DataResult> = [
    { title: <p className='text-nowrap'>Tên hàng</p>, dataIndex: 'name', key: 'name' },
    // { title: 'Nhóm hàng', dataIndex: 'category', key: 'category' },
    {
      title: <p className='text-nowrap'>Đã bán</p>,
      dataIndex: 'sold',
      key: 'sold',
      render: (text: number) => (
        <div className='text-right'>
          <NumberFormat number={text} type='SOLESOTIEN' />
        </div>
      )
    },
    {
      title: <p className='text-nowrap'>Tồn kho</p>,
      dataIndex: 'stock',
      key: 'stock',
      render: (text: number) => (
        <div className='text-right'>
          <NumberFormat number={text} type='SOLESOTIEN' />
        </div>
      )
    },
    {
      title: <p className='text-nowrap'>Giá vốn</p>,
      dataIndex: 'cost',
      key: 'cost',
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
      title: '',
      dataIndex: 'actions',
      key: 'actions',

      render: (_, record: ResTypes.Hanghoa_DataResult) => (
        <div className='display flex gap-2 justify-center'>
          <Button
            type='primary'
            size='small'
            onClick={() => {
              const existingItem = items.find((item) => item.productId === record.id)
              console.log(record.id)

              if (existingItem) {
                const updatedItems = items.map((item) =>
                  item.productId === record.id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                        total: record.price * (item.quantity + 1)
                      }
                    : item
                )
                setItems(updatedItems)
              } else {
                setItems([
                  ...items,
                  {
                    productId: record.id || '',
                    quantity: 1,
                    price: record.price,
                    productName: record.name,
                    total: record.price
                  }
                ])
              }
            }}>
            Thêm
          </Button>
        </div>
      )
    }
  ]
  return (
    <Table<ResTypes.Hanghoa_DataResult>
      columns={columns}
      loading={loading}
      dataSource={data}
      pagination={false}
      rowKey={(record) => record._id}
    />
  )
}

export default HangHoaSmallTable
