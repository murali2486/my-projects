import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuService } from './../../services/menu.service';
import { MasterService } from './../../services/master.service';
import { AuthenticationService } from './../../services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    public authService: AuthenticationService,
    public masterService: MasterService,
    private menuService: MenuService
    ) { }

  ngOnInit(): void {
    this.menuService.getMenu(this.masterService.userInfo ? this.masterService.userInfo.userId : '');
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.router.navigate(['/home']);
    this.authService.logout();
  }

}
