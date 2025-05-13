import { Api_List } from '@services/api.list'
import apiClient from '@services/axios.config'
import { useCreateUseMutation } from '@services/mutation'
import { useCustomQuery } from '@services/query'
import { ReqTypes, ResTypes } from '~types/index'

const DanhSach = async () => {
  const response = await apiClient.get<ResTypes.KhacHang_DanhSach>(Api_List.Customers.Customers, {})
  return response.data
}
const DanhSach_Small = async () => {
  const response = await apiClient.get<ResTypes.KhacHang_DanhSach_Small[]>(Api_List.Customers.Customers_List, {})
  return response.data
}
const Customers_Detail = async (id: string) => {
  const response = await apiClient.get<ResTypes.KhacHang_DataResult>(`${Api_List.Customers.Customers}${id}`, {})
  return response.data
}
const Customers_Add = async (data: ReqTypes.KhachHang_Them) => {
  const response = await apiClient.post<ResTypes.ErrorData>(Api_List.Customers.Customers, data)
  return response.data
}
const Customers_Update = async (data: ReqTypes.KhachHang_Sua) => {
  const response = await apiClient.post<ResTypes.ErrorData>(Api_List.Customers.Customers_Update, data)
  return response.data
}

export const useKhachHangMutation = {
  DanhSach: () => useCustomQuery<ResTypes.KhacHang_DanhSach>(['Customers_List'], DanhSach),
  DanhSach_Small: () => useCustomQuery<ResTypes.KhacHang_DanhSach_Small[]>(['Customers_List_Small'], DanhSach_Small),

  Customers_Add: () =>
    useCreateUseMutation<ReqTypes.KhachHang_Them, ResTypes.ErrorData>((data) => Customers_Add(data), 'Customers_Add', [
      'Customers_List'
    ]),
  Customers_Update: () =>
    useCreateUseMutation<ReqTypes.KhachHang_Sua, ResTypes.ErrorData>(
      (data) => Customers_Update(data),
      'Customers_Update',
      ['Customers_List']
    ),
  Customers_Detail: () =>
    useCreateUseMutation<string, ResTypes.KhacHang_DataResult>((data) => Customers_Detail(data), 'Customers_Detail', [
      'Customers_List'
    ])
}
