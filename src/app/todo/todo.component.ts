import { Component, OnInit } from "@angular/core";

import { Todo } from "../interfaces/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  //implement properties
  todoArray: Todo[] = [
    { task: "shower", completed: true },
    { task: "floss", completed: true },
    { task: "brush teeth", completed: true },
    { task: "gargle", completed: true },
    { task: "get dressed", completed: true },
    { task: "make coffee", completed: false },
    { task: "feed cats", completed: false },
    { task: "make breakfast", completed: false }
  ];

  constructor() {}

  ngOnInit(): void {}
}
