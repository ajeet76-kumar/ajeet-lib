import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'headerbar',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() profileImage: any;
  searchInput: any;
  @Output() childSearchEvent: EventEmitter<any> = new EventEmitter();
  @Input() appIconPath: any;
  @Input() homeUrlPath: any;
  @Input() profileMenuList: any;
  @Input() userProfileImage: any;
  updatedUserInformation: any;
  userInformation: any;
  constructor() {}
  onSearchClick(value: any) {
    this.childSearchEvent.emit(value);
  }
  logout() {}
  ngOnInit(): void {}
}
