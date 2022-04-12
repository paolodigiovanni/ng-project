import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { UserCardComponent } from './user-card/user-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    UserCardComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent
  ]
})
export class LayoutModule { }
