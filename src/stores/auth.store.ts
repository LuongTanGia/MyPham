import { create } from 'zustand'
import { persist } from 'zustand/middleware'
interface Store {
  token?: string

  setToken: (token: string) => void
}

const useAuthStore = create<Store>()(
  persist(
    (set) => ({
      token: undefined,
      refresh_token: undefined,
      setToken: (token) => set({ token })
    }),
    {
      name: 'auth-store'
    }
  )
)

export default useAuthStore
