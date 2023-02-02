import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userInfo :any;
  public isUserLogin =  false;
  apiUrl = "http://localhost:3000/user"
  constructor(private http: HttpClient) { 
    
  }

  public getAll() {
    return this.http.get(this.apiUrl);
  }

  public getByCode(code: any) {
    return this.http.get(this.apiUrl+'/'+code);
  }
  public proccedregister(inputData: any) {
    debugger
    return this.http.post(this.apiUrl,inputData);
  }
  public updateUser(code:any,inputData:any) {
    return this.http.post(this.apiUrl+'/'+ code,inputData)
  }

  public IsloggedIn() {
    return localStorage.getItem('userData')
  }

  public logout() {
    localStorage.removeItem('userData');
  }

  public setRoleLocalStorage(role: any) {
    localStorage.setItem('role',role)
  }
  public getRoleLocalStorage(role: any) {
    return localStorage.getItem('role')
  }
}
