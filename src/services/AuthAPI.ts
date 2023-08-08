import { httpGet, httpPost, httpPut } from './http';

export class AuthAPI {
  static register(newUser: any): Promise<any> {
    return httpPost('http://localhost:5000/auth/registration', newUser, {})
  }

  static login(data: any): Promise<any> {
    return httpPost('http://localhost:5000/auth/login', data, {})
  }

  static currentUser() {
    return httpGet('http://localhost:5000/auth/current_user', {})
  }

  static editProfile(data: any): Promise<any> {
    return httpPut('http://localhost:5000/auth/edit_profile', data)
  }
}
