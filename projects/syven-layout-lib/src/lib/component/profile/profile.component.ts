import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @Input() profileImage: any;
  searchInput: any;
  @Input() appIconPath: any;
  @Input() homeUrlPath: any;
  @Input() profileMenuList: any;
  @Input() userProfileImage: any;
  updatedUserInformation: any;
  userInformation: any;
  constructor() {}

  logout() {}
  ngOnInit(): void {}
}
