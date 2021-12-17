import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { AuthGuard } from './auth.guard';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path: 'task-list',
    component: TaskListComponent,

    canActivate: [AuthGuard] },

  { path: '', component: LoginComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
