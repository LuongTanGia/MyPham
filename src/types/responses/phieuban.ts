export type PhieuBan_DanhSach = PhieuBan_DataResult[]

export interface PhieuBan_DataResult {
  _id: string
  customerName: string
  items: PhieuBan_Item[]
  totalAmount: number
  issuedBy: string
  issuedAt: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface PhieuBan_Item {
  productId: string
  productName: string
  quantity: number
  price: number
  total: number
}
