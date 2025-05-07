export type Hanghoa_DanhSach = Hanghoa_DataResult[]

export interface Hanghoa_DataResult {
  _id: string
  name: string
  description: string
  price: number
  stock: number
  category: string
  sold: number

  transactions: Transaction[]
  createdAt: string
  updatedAt: string
  __v: number
}

export interface Transaction {
  type: string
  quantity: number
  note: string
  date: string
  timestamp: string
  performedBy: string
}
