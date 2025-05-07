import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ResTypes } from '~types/index'

interface Store {
  collapsed: boolean
  tabs: boolean
  selectdKey: string
  SoLeHeThong: ResTypes.SoLeHeThong
  KhoanNgay: ResTypes.KhoanNgay
  activeKey: string
  setActiveKey: (activeKey: string) => void
  setTabs: (tabs: boolean) => void
  setSelectdKey: (selectdKey: string) => void
  setCollapsed: (a: boolean) => void
  setSoLeHeThong: (SoLeHeThong: ResTypes.SoLeHeThong) => void
  setKhoanNgay: (KhoanNgay: ResTypes.KhoanNgay) => void
}

const useAppStore = create<Store>()(
  persist(
    (set) => ({
      tabs: true,
      activeKey: 'home',
      setActiveKey: (activeKey) => set({ activeKey }),
      setTabs: (tabs) => set({ tabs }),
      selectdKey: '',
      setSelectdKey: (selectdKey) => set({ selectdKey }),
      collapsed: false,
      setCollapsed: (collapsed) => set({ collapsed }),
      KhoanNgay: {
        NgayBatDau: '',
        NgayKetThuc: ''
      },
      setKhoanNgay: (KhoanNgay) => set({ KhoanNgay }),
      SoLeHeThong: {
        SOLEDONGIA: 0,
        SOLESOLUONG: 0,
        SOLESOTIEN: 0,
        SOLETYLE: 0
      },
      setSoLeHeThong: (SoLeHeThong) => set({ SoLeHeThong })
    }),
    {
      name: 'app-store'
    }
  )
)

export default useAppStore
