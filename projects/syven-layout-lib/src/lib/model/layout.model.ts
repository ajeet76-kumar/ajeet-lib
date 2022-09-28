export interface LayoutModel {
  id?: any;
  leftNav: boolean;
  leftNavPinned: boolean;
  rightNavClose: boolean;
  leftNavItems: Array<LeftBarModel>;
  rightNavItems: Array<ChildModel>;
  userSettings: UserSettingModel;
}

export interface LeftBarModel {
  id?: any;
  name: string;
  link: string;
  icon: string;
  child: Array<ChildModel>;
  open: boolean;
}
export interface ChildModel {
  id?: any;
  name: string;
  link: string;
  icon: string;
}

export interface UserSettingModel {
  themes: Array<ThemsModel>;
  spacing: Array<SpacingModel>;
  navigation: Array<NavigationModel>;
}

export interface ThemsModel {
  name: string;
  icon: string;
  id?: any;
  selected: boolean;
}
export interface SpacingModel {
  name: string;
  icon: string;
  id?: any;
  selected: boolean;
}
export interface NavigationModel {
  name: string;
  icon: string;
  id?: any;
  selected: boolean;
}
