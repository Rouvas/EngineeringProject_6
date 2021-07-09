import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthsysComponent } from './authsys/authsys.component';
import { HomepageComponent } from './homepage/homepage.component';

import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './modules/header/header.component';


import { SimpleNotificationsModule } from 'angular2-notifications';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DashboardComponent } from './supervisor/dashboard/dashboard.component';
import { OrganizationComponent } from './supervisor/organization/organization.component';
import {CommonModule} from '@angular/common';
import { WorkplacesComponent } from './supervisor/workplaces/workplaces.component';
import { PostsComponent } from './supervisor/posts/posts.component';
import { PersonsComponent } from './supervisor/persons/persons.component';
import { WorktimesComponent } from './supervisor/worktimes/worktimes.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotfoundComponent } from './errors/notfound/notfound.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';

import { NgxMaskModule, IConfig } from 'ngx-mask'
import {FormsModule} from '@angular/forms';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { AdminworkplacesComponent } from './admin/adminworkplaces/adminworkplaces.component';
import { AdminpostsComponent } from './admin/adminposts/adminposts.component';
import { AdminpersonsComponent } from './admin/adminpersons/adminpersons.component';
import { AdminworktimesComponent } from './admin/adminworktimes/adminworktimes.component';
import { ModerworktimesComponent } from './moderator/moderworktimes/moderworktimes.component';
import { ModerpersonsComponent } from './moderator/moderpersons/moderpersons.component';



@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    AuthsysComponent,
    HomepageComponent,
    HeaderComponent,
    DashboardComponent,
    OrganizationComponent,
    WorkplacesComponent,
    PostsComponent,
    PersonsComponent,
    WorktimesComponent,
    NotfoundComponent,
    UserloginComponent,
    UserdashboardComponent,
    AdminworkplacesComponent,
    AdminpostsComponent,
    AdminpersonsComponent,
    AdminworktimesComponent,
    ModerworktimesComponent,
    ModerpersonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxMaskModule.forRoot(),
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
