import { Api_List } from '@services/api.list'
import apiClient from '@services/axios.config'
import { useCreateUseMutation } from '@services/mutation'
import { useCustomQuery } from '@services/query'
import { ReqTypes, ResTypes } from '~types/index'

const DanhSach = async () => {
  const response = await apiClient.get<ResTypes.PhieuBan_DanhSach>(Api_List.Invoices.Invoices, {})
  return response.data
}
const Invoices_Them = async (data: ReqTypes.PhieuBan_Them) => {
  const response = await apiClient.post<ResTypes.ErrorData>(Api_List.Invoices.Invoices, data)
  return response.data
}

export const usePhieuBanMutation = {
  DanhSach: () => useCustomQuery<ResTypes.PhieuBan_DanhSach>(['Invoices_List'], DanhSach),
  Invoices_Them: () =>
    useCreateUseMutation<ReqTypes.PhieuBan_Them, ResTypes.ErrorData>((data) => Invoices_Them(data), 'Invoices_Them', [
      'Invoices_List'
    ])
}
