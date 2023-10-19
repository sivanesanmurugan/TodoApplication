import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  emailRef: string = '';
  nameRef: string = '';
  numberRef: string = '';
  todos: Todo[] = [];
  Add: string = 'Add';
  editid: number = 0;
  add(form: NgForm) {
    if (this.editid === 0) {
      let todo = {
        id: this.todos.length + 1,
        name: this.nameRef,
        email: this.emailRef,
        phonenumber: this.numberRef,
      };
      this.todos.push(todo);
    } else {
      let todonew = this.todos.map((todo) => {
        if (todo.id === this.editid) {
          return {
            ...todo,
            id: this.editid,
            name: this.nameRef,
            email: this.emailRef,
            phonenumber: this.numberRef,
          };
        } else {
          return todo;
        }
      });
      this.todos = todonew;
      this.Add = 'Add';
      this.editid = 0;
    }
    this.emailRef = '';
    this.nameRef = '';
    this.numberRef = '';
    form.resetForm();
  }
  edit(id: number) {
    this.editid = id;
    this.Add = 'Edit';
    let Newtodo = this.todos.find((todo) => todo.id == id);
    if (Newtodo) {
      this.nameRef = Newtodo.name;
      this.emailRef = Newtodo.email;
      this.numberRef = Newtodo.phonenumber;
    }
  }
  delete(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
