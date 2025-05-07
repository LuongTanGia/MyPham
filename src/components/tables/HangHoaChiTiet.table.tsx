import NumberFormat from '@components/formats/Number.format'
import { Table, TableColumnsType, Tag } from 'antd'
import dayjs from 'dayjs'
import { ResTypes } from '~types/index'

const HangHoaChiTietTable = ({ data, loading }: { data: ResTypes.Transaction[]; loading: boolean }) => {
  const columns: TableColumnsType<ResTypes.Transaction> = [
    {
      title: 'Ngày',
      align: 'center',
      dataIndex: 'date',
      key: 'date',
      render: (text: string) => <p>{dayjs(text).format('DD/MM/YYYY HH:mm:ss')}</p>
    },
    {
      title: 'Trạng thái',
      align: 'center',
      dataIndex: 'type',
      key: 'type',
      render: (text: 'IN' | 'OUT') =>
        text === 'IN' ? <Tag color='success'>Nhập vào</Tag> : <Tag color='error'>Bán ra</Tag>
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
    { title: 'Người cập nhật', dataIndex: 'performedBy', key: 'performedBy', align: 'center' }
  ]

  return (
    <Table<ResTypes.Transaction>
      columns={columns}
      loading={loading}
      dataSource={data}
      pagination={false}
      rowKey={(record) => record.timestamp}
      scroll={{ y: 500 }}
      bordered
    />
  )
}

export default HangHoaChiTietTable
