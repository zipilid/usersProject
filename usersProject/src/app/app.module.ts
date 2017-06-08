import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HttpService } from "app/services/http.service";
import { AddUserComponent } from './add-user/add-user.component';
import { RouterModule, Routes } from '@angular/router';
import{MdCardModule,MdIconModule,MdListModule,MdInputModule,MdGridListModule,MdButtonToggleModule,MdTabsModule,MdSidenavModule,MdButtonModule}from'@angular/material';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
const appRoutes: Routes = [
  { path: 'add-user', component: AddUserComponent },
  { path: 'user-details/:id',      component: UserDetailsComponent },
  {
    path: 'users',
    component: UsersListComponent
  },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  { path: '**', component: UsersListComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserDetailsComponent,
    AddUserComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MdCardModule,MdIconModule,MdInputModule,MdTabsModule,MdButtonModule,MdSidenavModule,MdListModule,MdButtonToggleModule,MdGridListModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
