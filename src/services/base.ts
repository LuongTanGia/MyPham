import { CookieManager } from '@class/Storage'

const cookie = new CookieManager('Access_')

export const handleLogout = () => {
  location.href = '/login'
  window.localStorage.clear()
  cookie.clear()
}
