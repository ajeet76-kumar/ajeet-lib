import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { SyvenLayoutLibService } from '../../syven-layout-lib.service';
import { LayoutModel } from '../../model/layout.model';

@Component({
  selector: 'left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
})
export class LeftSidebarComponent implements OnInit {
  isShow: boolean = false;
  userInformation!: LayoutModel;
  hoverMenu = false;
  constructor() {}

  ngOnInit(): void {
    this.userInformation = JSON.parse(
      localStorage.getItem('userInformation') as string
    );
  }
  logout() {}

  showLeftNav() {
    if (!this.userInformation.leftNav) {
      this.hoverMenu = true;
    }
  }
  hideLeftNav() {
    if (!this.userInformation.leftNav) {
      this.hoverMenu = false;
    }
  }

  dropLeft(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.userInformation.leftNavItems,
      event.previousIndex,
      event.currentIndex
    );
    localStorage.setItem(
      'userInformation',
      JSON.stringify(this.userInformation)
    );
  }

  showNavs() {
    this.isShow = !this.isShow;
  }
}
