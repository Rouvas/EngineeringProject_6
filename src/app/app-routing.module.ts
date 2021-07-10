import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthsysComponent} from './authsys/authsys.component';
import {DashboardComponent} from './supervisor/dashboard/dashboard.component';
import {OrganizationComponent} from './supervisor/organization/organization.component';
import {HomepageComponent} from './homepage/homepage.component';
import {PostsComponent} from './supervisor/posts/posts.component';
import {WorkplacesComponent} from './supervisor/workplaces/workplaces.component';
import {PersonsComponent} from './supervisor/persons/persons.component';
import {WorktimesComponent} from './supervisor/worktimes/worktimes.component';
import {NotfoundComponent} from './errors/notfound/notfound.component';
import {UserloginComponent} from './user/userlogin/userlogin.component';
import {UserdashboardComponent} from './user/userdashboard/userdashboard.component';
import {AdmindashboardComponent} from './admin/admindashboard/admindashboard.component';
import {AdminpostsComponent} from './admin/adminposts/adminposts.component';
import {AdminworkplacesComponent} from './admin/adminworkplaces/adminworkplaces.component';
import {AdminpersonsComponent} from './admin/adminpersons/adminpersons.component';
import {ModerdashboardComponent} from './moderator/moderdashboard/moderdashboard.component';
import {ModerworktimesComponent} from './moderator/moderworktimes/moderworktimes.component';
import {ModerpersonsComponent} from './moderator/moderpersons/moderpersons.component';


const routes: Routes = [
  // Главная страница
  {path: '', component: HomepageComponent},
  // Страница авторизации
  {path: 'auth', component: AuthsysComponent},
  // Супервизор
  {path: 'supervisor', component: DashboardComponent},
  {path: 'supervisor/organizations', component: OrganizationComponent},
  {path: 'supervisor/posts', component: PostsComponent},
  {path: 'supervisor/workplaces', component: WorkplacesComponent},
  {path: 'supervisor/persons', component: PersonsComponent},
  {path: 'supervisor/worktimes', component: WorktimesComponent},
  // Администратор
  {path: 'administrator', component: AdmindashboardComponent},
  {path: 'administrator/posts', component: AdminpostsComponent},
  {path: 'administrator/workplaces', component: AdminworkplacesComponent},
  {path: 'administrator/persons', component: AdminpersonsComponent},
  {path: 'administrator/worktimes', component: AdminworkplacesComponent},
  // Модератор
  {path: 'moderator', component: ModerdashboardComponent},
  {path: 'moderator/persons', component: ModerpersonsComponent},
  {path: 'moderator/worktimes', component: ModerworktimesComponent},
  // Страница сотрудника
  {path: 'worker/auth', component: UserloginComponent},
  {path: 'worker/dashboard/:id', component: UserdashboardComponent},
  // 404
  {path: '**', component: NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
