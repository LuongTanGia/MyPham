import { Api_List } from '@services/api.list'
import apiClient from '@services/axios.config'
import { useCreateUseMutation } from '@services/mutation'
import { useCustomQuery } from '@services/query'
import { ReqTypes, ResTypes } from '~types/index'

const DanhSach = async () => {
  const response = await apiClient.get<ResTypes.Hanghoa_DanhSach>(Api_List.Products.Products, {})
  return response.data
}
const DanhSach_Small = async () => {
  const response = await apiClient.get<ResTypes.Hanghoa_DanhSach>(Api_List.Products.Products_List, {})
  return response.data
}
const Products_Detail = async (id: string) => {
  const response = await apiClient.get<ResTypes.Hanghoa_DataResult>(`${Api_List.Products.Products}${id}`, {})
  return response.data
}
const Products_Delete = async (productId: string) => {
  const response = await apiClient.post<ResTypes.ErrorData>(Api_List.Products.Products_Delete, { productId })
  return response.data
}
const Products_Add = async (data: ReqTypes.Hanghoa_Them) => {
  const response = await apiClient.post<ResTypes.ErrorData>(Api_List.Products.Products, data)
  return response.data
}
const Products_In = async (data: ReqTypes.Hanghoa_Sua) => {
  const response = await apiClient.post<ResTypes.ErrorData>(Api_List.Products.Products_In, data)
  return response.data
}
const Products_Out = async (data: ReqTypes.Hanghoa_Sua) => {
  const response = await apiClient.post<ResTypes.ErrorData>(Api_List.Products.Products_Out, data)
  return response.data
}

export const useHangHoaMutation = {
  DanhSach: () => useCustomQuery<ResTypes.Hanghoa_DanhSach>(['DanhSach_HangHoa'], DanhSach),
  DanhSach_Small: () => useCustomQuery<ResTypes.Hanghoa_DanhSach>(['DanhSach_HangHoa_Small'], DanhSach_Small),

  Products_Add: () =>
    useCreateUseMutation<ReqTypes.Hanghoa_Them, ResTypes.ErrorData>((data) => Products_Add(data), 'Products_Add', [
      'DanhSach_HangHoa'
    ]),
  Products_In: () =>
    useCreateUseMutation<ReqTypes.Hanghoa_Sua, ResTypes.ErrorData>((data) => Products_In(data), 'Products_In', [
      'DanhSach_HangHoa'
    ]),
  Products_Out: () =>
    useCreateUseMutation<ReqTypes.Hanghoa_Sua, ResTypes.ErrorData>((data) => Products_Out(data), 'Products_Out', [
      'DanhSach_HangHoa'
    ]),
  Products_Delete: () =>
    useCreateUseMutation<string, ResTypes.ErrorData>((data) => Products_Delete(data), 'Products_Delete', [
      'DanhSach_HangHoa'
    ])
}
