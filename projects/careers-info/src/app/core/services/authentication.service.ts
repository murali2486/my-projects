import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';
import { MasterService } from './master.service';
import { isUndefined } from 'util';
import { Constants } from '../utilities/constants';
import { constants } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public isUserLoggedIn: boolean = false;

  constructor(private http: HttpClient,
    private masterService: MasterService) {
  }

  public get currentUserValue(): User {
    return this.masterService.userInfo;
  }

  login(username: string, password: string) {
    return this.http.post<any>(Constants.URL_AUTHENTICATE, { username, password })
        .pipe(map(user => {
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem(Constants.CURRENTUSER, JSON.stringify(user));
                this.masterService.userInfo = this.populateUserInfo(user);
                this.isUserLoggedIn = true;
            }

            return user;
        }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem(Constants.CURRENTUSER);
      this.masterService.userInfo = null;
      this.isUserLoggedIn = false;
  }

  populateUserInfo(user: any) {
    let userInfo: User = new User();
    userInfo.userId = user.userid;
    userInfo.userName = user.username;
    userInfo.firstName = user.firstname;
    userInfo.lastName = user.lastname;
    userInfo.email = user.email;
    userInfo.role = user.role;

    return userInfo;
  }
}
