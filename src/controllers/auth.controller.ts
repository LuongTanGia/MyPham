import { Api_Auth } from '@services/api.list'
import apiClient from '@services/axios.config'
import { useCreateUseMutation } from '@services/mutation'
import { ReqTypes, ResTypes } from '~types/index'

const DangNhap = async (data: ReqTypes.DangNhap) => {
  const response = await apiClient.post<ResTypes.DangNhap>(Api_Auth.Login, data)
  return response.data
}

export const useAuthMutation = {
  DangNhap: () => useCreateUseMutation<ReqTypes.DangNhap, ResTypes.DangNhap>((data) => DangNhap(data), 'DangNhap')
}
