import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodoHomeComponent } from './todo-home/todo-home.component';

const routes: Routes = [
  { path: 'new', component: NewTodoComponent },
  { path: '', component: TodoHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
