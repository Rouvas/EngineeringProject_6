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


const routes: Routes = [
  // Главная страница
  {path: '', component: HomepageComponent},
  // Страница авторизации
  {path: 'auth', component: AuthsysComponent},
  // Дашборд супервизора
  {path: 'supervisor', component: DashboardComponent},
  {path: 'supervisor/organizations', component: OrganizationComponent},
  {path: 'supervisor/posts', component: PostsComponent},
  {path: 'supervisor/workplaces', component: WorkplacesComponent},
  {path: 'supervisor/persons', component: PersonsComponent},
  {path: 'supervisor/worktimes', component: WorktimesComponent},
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
