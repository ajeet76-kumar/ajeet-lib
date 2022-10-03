import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LayoutModel } from './model/layout.model';

@Component({
  selector: 'lib-syven-layout-lib',
  template: `
    <div>
      <headerbar
        [profileImage]="profileImage"
        [appIconPath]="appIconPath"
        [homeUrlPath]="homeUrlPath"
        [profileMenuList]="profileMenuList"
        [userProfileImage]="userProfileImage"
        (childSearchEvent)="parentSearchEvent($event)"
      ></headerbar>
      <left-sidebar></left-sidebar>
      <right-sidebar></right-sidebar>
    </div>
  `,
  // styleUrls: ['../assets/scss/custom-theme.scss'],
  styles: [
    `
      header {
        z-index: 10;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: $bg-white;
        display: block;
        box-shadow: $box-shadow-header;
      }

      header nav {
        width: 100%;
        height: 48px;
        background-color: rgb(255, 255, 255);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      header .header-logo {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      header .header-logo .hamburger {
        width: 48px;
        height: 48px;
        padding: 6px;
      }
      header .header-logo .logo {
        cursor: pointer;
      }
      header .header-logo .logo img {
        height: 34px;
      }

      header .header-logo .logo img.logo-hex {
        filter: brightness(0) invert(1);
      }

      header {
        padding: 0px 15px;
      }

      header .header-icon ul {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0rem;
      }

      header .header-icon ul li {
        list-style: none;
      }
    `,
  ],
})
export class SyvenLayoutLibComponent implements OnInit {
  profileImage: any;
  @Input() appIconPath: any;
  @Input() homeUrlPath: any;
  @Input() profileMenuList: any;
  @Input() userProfileImage: any;
  @Output() searchData: EventEmitter<any> = new EventEmitter();

  @Input() userInformation!: LayoutModel;
  constructor() {}

  ngOnInit(): void {
    localStorage.setItem(
      'userInformation',
      JSON.stringify(this.userInformation)
    );
  }
  parentSearchEvent(searchInput: any) {
    this.searchData.emit(searchInput);
  }
}
