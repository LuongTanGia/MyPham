export type KhacHang_DanhSach = KhacHang_DataResult[]

export interface KhacHang_DataResult {
  _id: string
  name: string
  email: string
  phone: string
  address: string
  debt: number
  createdAt: string
  updatedAt: string
  __v: number
  transactions: Transaction_KhachHang[]
}

export interface Transaction_KhachHang {
  amount: number
  date: string
  note: string
  performedBy: string
}
export interface KhacHang_DanhSach_Small {
  id: string
  name: string
}
