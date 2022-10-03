import { NgModule } from '@angular/core';
import { SyvenLayoutLibComponent } from './syven-layout-lib.component';
import { HeaderComponent } from './component/header/header.component';
import { LeftSidebarComponent } from './component/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './component/right-sidebar/right-sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';

@NgModule({
  declarations: [
    SyvenLayoutLibComponent,
    HeaderComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    ProfileComponent,
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    DragDropModule,
  ],
  exports: [SyvenLayoutLibComponent],
})
export class SyvenLayoutLibModule {}
