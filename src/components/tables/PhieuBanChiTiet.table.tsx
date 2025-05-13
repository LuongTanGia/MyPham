import NumberFormat from '@components/formats/Number.format'
import { Table, TableColumnsType, Tag } from 'antd'
import dayjs from 'dayjs'
import { ResTypes } from '~types/index'

const PhieuBanChiTietTable = ({ data, loading }: { data: ResTypes.PhieuBan_Item[]; loading: boolean }) => {
  const columns: TableColumnsType<ResTypes.PhieuBan_Item> = [
    {
      title: 'Tên hàng',
      align: 'center',
      dataIndex: 'productName',
      key: 'productName',
      width: '50%',
      render: (text: string) => <p className='text-nowrap text-left'>{text}</p>
    },
    {
      title: 'Đơn giá',
      align: 'center',
      dataIndex: 'price',
      key: 'price',
      render: (text: number) => (
        <div className='text-right'>
          <NumberFormat number={text} type='SOLESOTIEN' />
        </div>
      )
    },
    {
      title: 'Số lượng',
      align: 'center',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (text: number) => (
        <div className='text-right'>
          <NumberFormat number={text} type='SOLESOTIEN' />
        </div>
      )
    },
    {
      title: 'Tổng tiền',
      align: 'center',
      dataIndex: 'total',
      key: 'total',
      render: (text: number) => (
        <div className='text-right'>
          <NumberFormat number={text} type='SOLESOTIEN' />
        </div>
      )
    }
  ]

  return (
    <Table<ResTypes.PhieuBan_Item>
      columns={columns}
      loading={loading}
      dataSource={data}
      pagination={false}
      scroll={{ y: 500 }}
      bordered
    />
  )
}

export default PhieuBanChiTietTable
