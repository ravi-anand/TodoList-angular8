import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  @Output() todoList = new EventEmitter();

  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  submit(newTodo: string) {
    if (newTodo) {
      this.todoList.emit(newTodo);
    } else {
      this.snackBar.open('Please Enter Todo to Add', 'close ', { duration: 2000, });
    }
  }

}
