import NumberFormat from '@components/formats/Number.format'
import { Table, TableColumnsType, Tag } from 'antd'
import dayjs from 'dayjs'
import { ResTypes } from '~types/index'

const KhacHangChiTietTable = ({ data, loading }: { data: ResTypes.Transaction_KhachHang[]; loading: boolean }) => {
  const columns: TableColumnsType<ResTypes.Transaction_KhachHang> = [
    {
      title: 'Ngày',
      align: 'center',
      dataIndex: 'date',
      key: 'date',
      render: (text: string) => <p>{dayjs(text).format('DD/MM/YYYY HH:mm:ss')}</p>
    },
    {
      title: 'Số tiền',
      align: 'center',
      dataIndex: 'amount',
      key: 'amount',
      render: (text: number) => (
        <div className='text-right'>
          <NumberFormat number={text} type='SOLESOTIEN' />
        </div>
      )
    },
    { title: 'Ghi chú', dataIndex: 'note', key: 'note', align: 'center' },

    { title: 'Người cập nhật', dataIndex: 'performedBy', key: 'performedBy', align: 'center' }
  ]

  return (
    <Table<ResTypes.Transaction_KhachHang>
      columns={columns}
      loading={loading}
      dataSource={data}
      pagination={false}
      rowKey={(record) => record.date}
      scroll={{ y: 500 }}
      bordered
    />
  )
}

export default KhacHangChiTietTable
