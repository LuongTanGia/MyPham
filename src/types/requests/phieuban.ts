export interface PhieuBan_Them {
  customerId: string
  items: PhieuBan_Item[]
}

export interface PhieuBan_Item {
  productId: string
  productName: string
  price: number
  quantity: number
  total: number
}
