import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LayoutModel } from './model/layout.model';

@Component({
  selector: 'lib-syven-layout-lib',
  template: `
    <div>
      <header
        [profileImage]="profileImage"
        [appIconPath]="appIconPath"
        [homeUrlPath]="homeUrlPath"
        [profileMenuList]="profileMenuList"
        [userProfileImage]="userProfileImage"
        (childSearchEvent)="parentSearchEvent($event)"
      ></header>
      <left-sidebar></left-sidebar>
      <right-sidebar></right-sidebar>
    </div>
  `,
  styles: [
    `
      header {
        z-index: 10;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: rgb(255, 255, 255);
        display: block;
        box-shadow: rgb(180 180 180 / 20%) 0px 0px 3px;
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
