export type Hanghoa_DanhSach = Hanghoa_DataResult[]

export interface Hanghoa_DataResult {
  _id: string
  id?: string

  name: string
  description: string
  price: number
  stock: number
  category: string
  sold: number
  cost: number
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
  cusName: string
  timestamp: string
  performedBy: string
}
