import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.css']
})
export class TodoHomeComponent implements OnInit {

  todoList = [];
  completeList = [];

  constructor() { }

  ngOnInit() {
  }

  onTodoList(data: string) {
    if (this.todoList[0] === 'add new todo') {
      console.log('undefined found');
      this.todoList[0] = data;
    } else {
      console.log(typeof(data));
      this.todoList.push(data);
    }
  }

  completed(i: number) {
    this.completeList.push(this.todoList.splice(i, 1));
  }

  add(i: number) {
    this.todoList.push(this.completeList.splice(i, 1));
  }

  remove(i: number) {
    this.completeList.splice(i, 1);
  }

}
