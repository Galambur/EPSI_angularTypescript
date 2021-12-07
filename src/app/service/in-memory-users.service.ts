import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {LDAP_USERS} from "../model/ldap-mock-data";
import {UserLdap} from "../model/user-ldap";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InMemoryUsersService implements InMemoryDbService {
  private usersUrl = '';
  private httpOptions = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
    this.usersUrl = environment.usersApiUrl;
  }

  createDb() {
    console.log('InMemoryUsersService.createDb');
    const users: UserLdap[] = LDAP_USERS;
    return users;
  }

  genId(users: UserLdap[]): number {
    console.log("InMemoryUsersService.genId");
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 4;
  }

  getUsers(): Observable<UserLdap[]>{
    return this.http.get<UserLdap[]>(this.usersUrl);
  }

  getUser(id: number): Observable<UserLdap>{
    return this.http.get<UserLdap>(this.usersUrl + '/' + id);
  }

  addUser(user: UserLdap): Observable<UserLdap>{
    return this.http.post<UserLdap>(this.usersUrl, user, {
      headers:this.httpOptions
    });
  }

  updateUser(user: UserLdap): Observable<UserLdap>{
    return this.http.put<UserLdap>(this.usersUrl + "/" + user.id,
      user, {headers: this.httpOptions});
  }

  deleteUser(id: number): Observable<UserLdap>{
    return this.http.delete<UserLdap>(this.usersUrl + '/' + id, {
      headers: this.httpOptions
    });
  }
}
