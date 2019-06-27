export class AuthLocalStorage {
  static storageKey = 'token'

  static get token() {
    return localStorage.getItem(AuthLocalStorage.storageKey);
  }

  static set token(token) {
    localStorage.setItem(AuthLocalStorage.storageKey, token);
  }

  static remove() {
    localStorage.removeItem(AuthLocalStorage.storageKey);
  }
}