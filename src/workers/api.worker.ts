// src/workers/api.worker.ts
import { Api_List } from '@services/api.list'
import apiClient from '@services/axios.config'
import { AxiosError } from 'axios'
import { ReqTypes, ResTypes } from '~types/index'

self.onmessage = async ({ data }) => {
  const { type, payload } = data

  try {
    let res

    switch (type) {
      case 'DanhSach':
        res = await apiClient.get(Api_List.Customers.Customers)
        break
      case 'Customers_Detail':
        res = await apiClient.get(`${Api_List.Customers.Customers}${payload}`)
        break
      case 'Customers_Add':
        res = await apiClient.post(Api_List.Customers.Customers, payload)
        break
      case 'Customers_Update':
        res = await apiClient.post(Api_List.Customers.Customers_Update, payload)
        break
      default:
        throw new Error('Action not found in worker')
    }

    self.postMessage({ success: true, data: res.data })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Something went wrong'
    self.postMessage({ success: false, error: errorMessage })
  }
}
