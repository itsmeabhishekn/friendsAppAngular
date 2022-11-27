import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendAddComponent } from './friend-add/friend-add.component';
import { FriendViewComponent } from './friend-view/friend-view.component';
import { FriendSearchComponent } from './friend-search/friend-search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {  RouterModule ,Routes} from '@angular/router';

const myRoute:Routes = [
  {path:"",component:FriendAddComponent},
  {path:"add",component:FriendAddComponent},
  {path:"search",component:FriendSearchComponent},
  {path:"view",component:FriendViewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FriendAddComponent,
    FriendViewComponent,
    FriendSearchComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
