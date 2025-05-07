//localStorage
export class LocalStorageManager {
  private prefix: string

  constructor(prefix: string = 'app_') {
    this.prefix = prefix
  }
  private _getFullKey(key: string): string {
    return this.prefix + key
  }
  setItem(key: string, value: unknown): void {
    localStorage.setItem(this._getFullKey(key), JSON.stringify(value))
  }
  getItem(key: string): unknown {
    const value = localStorage.getItem(this._getFullKey(key))
    return value ? JSON.parse(value) : null
  }
  setStringItem(key: string, value: string): void {
    localStorage.setItem(this._getFullKey(key), value)
  }
  getStringItem(key: string): string | null {
    return localStorage.getItem(this._getFullKey(key))
  }
  removeItem(key: string): void {
    localStorage.removeItem(this._getFullKey(key))
  }
  clear(): void {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith(this.prefix)) {
        localStorage.removeItem(key)
      }
    })
  }
}
//sessionStorage
export class SessionStorageManager {
  private prefix: string

  constructor(prefix: string = 'app_') {
    this.prefix = prefix
  }
  private _getFullKey(key: string): string {
    return this.prefix + key
  }
  setItem(key: string, value: unknown): void {
    sessionStorage.setItem(this._getFullKey(key), JSON.stringify(value))
  }
  getItem(key: string): unknown {
    const value = sessionStorage.getItem(this._getFullKey(key))
    return value ? JSON.parse(value) : null
  }
  setStringItem(key: string, value: string): void {
    sessionStorage.setItem(this._getFullKey(key), value)
  }
  getStringItem(key: string): string | null {
    return sessionStorage.getItem(this._getFullKey(key))
  }
  removeItem(key: string): void {
    sessionStorage.removeItem(this._getFullKey(key))
  }
  clear(): void {
    Object.keys(sessionStorage).forEach((key) => {
      if (key.startsWith(this.prefix)) {
        sessionStorage.removeItem(key)
      }
    })
  }
}
//cookie
export class CookieManager {
  private prefix: string

  constructor(prefix: string = 'app_') {
    this.prefix = prefix
  }

  private _getFullKey(key: string): string {
    return this.prefix + key
  }

  private _setCookie(name: string, value: string): void {
    const date = new Date()
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000)
    const expires = 'expires=' + date.toUTCString()
    document.cookie = `${name}=${value};${expires};path=/`
  }

  private _getCookie(name: string): string | null {
    const nameEQ = name + '='
    const ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) == ' ') c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  }

  private _eraseCookie(name: string): void {
    document.cookie = name + '=; Max-Age=-99999999; path=/'
  }

  setItem(key: string, value: unknown): void {
    this._setCookie(this._getFullKey(key), JSON.stringify(value))
  }

  getItem(key: string): unknown {
    const value = this._getCookie(this._getFullKey(key))
    return value ? JSON.parse(value) : null
  }

  setStringItem(key: string, value: string): void {
    this._setCookie(this._getFullKey(key), value)
  }

  getStringItem(key: string): string | null {
    return this._getCookie(this._getFullKey(key))
  }

  removeItem(key: string): void {
    this._eraseCookie(this._getFullKey(key))
  }

  clear(): void {
    document.cookie.split(';').forEach((cookie) => {
      const eqPos = cookie.indexOf('=')
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim()
      if (name.startsWith(this.prefix)) {
        this._eraseCookie(name)
      }
    })
  }
}
