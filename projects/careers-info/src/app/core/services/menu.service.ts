import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Leftmenu } from '../models/leftmenu';
import { Topmenu } from '../models/topmenu';
import { Constants } from '../utilities/constants';
import { MasterService } from './master.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient,
    private masterService: MasterService) {

    }

  public get getTopMenu(): Topmenu[] {
    return this.masterService.topMenu;
  }

  public get getLeftMenu(): Leftmenu[] {
    return this.masterService.leftMenu;
  }

  getMenu(userId: string) {
    return this.http.get<any>('/assets/json/users.json').subscribe(
      menu => {
        if (menu) {
          this.masterService.topMenu = this.populateTopMenu(menu.users[0].menus.headermenu);
          this.masterService.leftMenu = this.populateLeftMenu(menu.users[0].menus.leftmenu);
        }
      },
      error => console.log('oops', error)
    );
  }

  populateTopMenu(menu: any) {
    let topMenu: Topmenu[] = [];
    menu.forEach(element => {
      let temp: Topmenu = new Topmenu();
      temp.name = element.name;
      temp.url = element.url;

      if(element.subMenu) {
        temp.subMenu = [];
        element.subMenu.forEach(sub => {
          let subMenu: Topmenu = new Topmenu();
          subMenu.name = sub.name;
          subMenu.url = sub.url;
          temp.subMenu.push(subMenu);
        });
      }

      topMenu.push(temp);
    });

    return topMenu;
  }

  populateLeftMenu(menu: any) {
    let leftMenu: Leftmenu[] = [];
    menu.forEach(element => {
      let temp: Leftmenu = new Leftmenu();
      temp.name = element.name;
      temp.url = element.url;

      if(element.subMenu) {
        temp.subMenu = [];
        element.subMenu.forEach(sub => {
          let subMenu: Leftmenu = new Leftmenu();
          subMenu.name = sub.name;
          subMenu.url = sub.url;
          temp.subMenu.push(subMenu);
        });
      }

      leftMenu.push(temp);
    });

    return leftMenu;
  }
}
