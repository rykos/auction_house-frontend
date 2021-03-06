import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@app/_models/User';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { map, catchError } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  updateUserInfo(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/account/details`).pipe(map(user => {
      user.token = this.currentUserValue.token;//Keep token
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    }));
  }

  addBalance(): Observable<User>{
    return this.http.post<User>(`${environment.apiUrl}/account/balance/add/5`, null);
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/Authenticate/login`, { username, password }).pipe(map(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    }));
  }

  register(email: string, username: string, password: string) {
    console.log("register");
    return this.http.post<User>(`${environment.apiUrl}/Authenticate/register`, { email, username, password }).pipe(map(user => {
      console.log("User created");
      this.login(username, password).subscribe(x => {
        this.router.navigate([""]);
      });
    }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
