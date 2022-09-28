import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'syven-lib';
  appIconPath: any = 'assets/img/banker-one-logo.svg';
  homeUrlPath: any = '/';
  profileMenuList = [
    { nam: 'My Profile', url: '/' },
    { nam: 'My Settings', url: '/' },
    { nam: 'Help & feedback', url: '/' },
    { nam: 'My Profile', url: '/' },
    { nam: 'Log out', url: '/', imageUrl: 'assets/img/icon/icon-logout.svg' },
  ];
  userInformation = {
    leftNav: false,
    leftNavPinned: false,
    rightNavClose: false,
    leftNavItems: [
      {
        name: 'Application One',
        link: '/',
        icon: 'icon-application',
        child: [
          {
            name: 'Dashboard',
            icon: 'icon-dashboard',
            link: '/',
          },
          {
            name: 'Client Interactions',
            icon: 'icon-subnav',
            link: '/',
          },
          {
            name: 'Activity Level',
            icon: 'icon-subnav',
            link: '/',
          },
          {
            name: 'Market Activity',
            icon: 'icon-subnav',
            link: '/',
          },
          {
            name: 'Conflict Clearance',
            icon: 'icon-subnav',
            link: '/',
          },
          {
            name: 'Human Capital',
            icon: 'icon-subnav',
            link: '/',
          },
          {
            name: 'Deal Announcement',
            icon: 'icon-subnav',
            link: '/',
          },
        ],
        open: true,
      },
      {
        name: 'Banker Bio',
        link: '/',
        icon: 'icon-banker',
        child: [
          {
            name: 'My Profile',
            icon: 'icon-subnav',
            link: '/',
          },
          {
            name: 'Search',
            icon: 'icon-subnav',
            link: '/',
          },
        ],
        open: false,
      },
      {
        name: 'Research',
        link: '/',
        icon: 'icon-research',
        child: [
          {
            name: 'Dashboard',
            icon: 'icon-subnav',
            link: '/',
          },
          {
            name: 'Advance Search',
            icon: 'icon-subnav',
            link: '/',
          },
          {
            name: 'Saved Search',
            icon: 'icon-subnav',
            link: '/',
          },
          {
            name: 'Search History',
            icon: 'icon-subnav',
            link: '/',
          },
          {
            name: 'Download History',
            icon: 'icon-subnav',
            link: '/',
          },
          {
            name: 'My Preferences',
            icon: 'icon-subnav',
            link: '/',
          },
        ],
        open: false,
      },
      {
        name: 'Relationship Search',
        link: '/',
        icon: 'icon-relarionship',
        child: [
          {
            name: 'My Profile',
            icon: 'icon-subnav',
            link: '/',
          },
          {
            name: 'Search',
            icon: 'icon-subnav',
            link: '/',
          },
        ],
        open: false,
      },
      {
        name: 'LCP',
        link: '/',
        icon: 'icon-lcp',
        child: [
          {
            name: 'My Profile',
            icon: 'icon-subnav',
            link: '/',
          },
          {
            name: 'Search',
            icon: 'icon-subnav',
            link: '/',
          },
        ],
        open: false,
      },
    ],
    rightNavItems: [
      {
        name: 'Google',
        link: 'https://www.google.com',
        icon: 'icon-google',
      },
      {
        name: 'Twitter',
        link: 'https://www.twitter.com',
        icon: 'icon-twitter',
      },
      {
        name: 'Tumbler',
        link: 'https://www.tumbler.com',
        icon: 'icon-tumbler',
      },
      {
        name: 'Linkedin',
        link: 'https://www.linkedin.com',
        icon: 'icon-linkedin',
      },
      {
        name: 'Pinterest',
        link: 'https://www.pinterest.com',
        icon: 'icon-pinterest',
      },
    ],
    userSettings: {
      themes: [
        {
          name: 'Light',
          icon: 'icon-lighttheme',
          id: 'light-theme',
          selected: true,
        },
        {
          name: 'Default',
          icon: ' icon-defaulttheme',
          id: 'default-theme',
          selected: false,
        },
        {
          name: 'Color',
          icon: 'icon-colortheme',
          id: 'color-theme',
          selected: false,
        },
      ],
      spacing: [
        {
          name: 'Comfort',
          icon: 'icon-comforttheme',
          selected: false,
        },
        {
          name: 'Compact',
          icon: 'icon-Compact',
          selected: false,
        },
      ],
      navigation: [
        {
          name: 'Showalways',
          icon: 'icon-showalways',
          selected: false,
        },
        {
          name: 'hide',
          icon: 'icon-hidetheme',
          selected: false,
        },
      ],
    },
  };

  perentSearchData(value: any) {
    console.log(value);
  }
}
