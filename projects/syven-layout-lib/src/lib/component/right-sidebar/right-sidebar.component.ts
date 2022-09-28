import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { LayoutModel } from '../../model/layout.model';
import { SyvenLayoutLibService } from '../../syven-layout-lib.service';

@Component({
  selector: 'right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css'],
})
export class RightSidebarComponent implements OnInit {
  userInformation!: LayoutModel;
  rightevent: boolean = false;
  constructor(public syvenLayoutLibService: SyvenLayoutLibService) {}
  ngOnInit(): void {
    this.userInformation = JSON.parse(
      localStorage.getItem('userInformation') as string
    );
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.userInformation.rightNavItems,
      event.previousIndex,
      event.currentIndex
    );
    localStorage.setItem(
      'userInformation',
      JSON.stringify(this.userInformation)
    );
  }
  rightPanel() {
    this.userInformation.rightNavClose = !this.userInformation.rightNavClose;
    localStorage.setItem(
      'userInformation',
      JSON.stringify(this.userInformation)
    );
    this.rightevent = this.userInformation.rightNavClose;
    this.syvenLayoutLibService.setrightnav(this.rightevent);
  }
}
