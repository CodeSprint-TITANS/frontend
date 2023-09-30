import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from 'src/environment';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 

  }

  public register(user: User){
    return this.http.post(Environment.apiUrl+"/user/register", user);
  }
}
