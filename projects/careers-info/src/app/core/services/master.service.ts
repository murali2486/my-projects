import { Injectable } from '@angular/core';
import { Leftmenu } from '../models/leftmenu';
import { Topmenu } from '../models/topmenu';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  public userInfo: User;
  public topMenu: Topmenu[];
  public leftMenu: Leftmenu[];

  constructor() { }
}
