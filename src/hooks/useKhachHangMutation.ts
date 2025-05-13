// src/hooks/useKhachHangMutation.ts
import { useCustomQuery } from '@services/query'
import { useCreateUseMutation } from '@services/mutation'
import { ReqTypes, ResTypes } from '~types/index'
import { useApiWorker } from '@utils/useApiWorker'

export const useKhachHangMutation = {
  DanhSach: () => useCustomQuery<ResTypes.Hanghoa_DanhSach>(['Customers_HangHoa'], useApiWorker('DanhSach')),

  Customers_Add: () =>
    useCreateUseMutation<ReqTypes.Hanghoa_Them, ResTypes.ErrorData>(useApiWorker('Customers_Add'), 'Customers_Add', [
      'Customers_HangHoa'
    ]),

  Customers_Update: () =>
    useCreateUseMutation<ReqTypes.Hanghoa_Sua, ResTypes.ErrorData>(
      useApiWorker('Customers_Update'),
      'Customers_Update',
      ['Customers_HangHoa']
    ),

  Customers_Detail: () =>
    useCreateUseMutation<string, ResTypes.Hanghoa_DataResult>(useApiWorker('Customers_Detail'), 'Customers_Detail', [
      'Customers_HangHoa'
    ])
}
