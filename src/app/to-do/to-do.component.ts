import { Component, OnInit } from "@angular/core";
import { ToDo } from "./to-do";

import { AuthService } from "../shared/services/auth.service";
import { TodoService } from "../shared/services/todo.service";

@Component({
    selector: "ToDo",
    templateUrl: "./to-do.component.html",
    styleUrls: ["./to-do.component.css"]
})
export class ToDoComponent implements OnInit {
    constructor(private todoService: TodoService, private authService: AuthService) {}

    ToDos:any = [];

    Input: string = "";

    Submitted: boolean = false;
    addNew: boolean = false;

    ngOnInit() {
        this.getTodos();
    }

    getTodos() {
        this.todoService.getTodos().subscribe(res => {
          let coffeeOrdersData = res.map(coffeeData => {
            let customData = coffeeData.payload.doc.data();
            customData["id"] = coffeeData.payload.doc.id;
            return customData;
          });
          // this.ToDos = orderBy(coffeeOrdersData, ['createdDate'], ['desc']);
          console.log(coffeeOrdersData);
          this.ToDos = coffeeOrdersData;
        });
    }

    deleteItem(id) {
        // this.ToDos.splice(i, 1);
        this.todoService.removeTodo(id).then(res => {console.log(res);
          // this.hasMessage = true;
          // this.errors = ["Order submitted successfully"];
          // this.resetForm();
        });
    }

    addItem() {
        this.Submitted = true;
        if (this.Input == "") {
            return;
        }
        let userDetails = this.authService.getUserDetails();
        let data = {
            title: this.Input,
            createdDate: new Date(),
            isCompleted: false,
            user: userDetails.uid
        };

        this.todoService.addTodo(data).then(res => {console.log(res);
          // this.hasMessage = true;
          // this.errors = ["Order submitted successfully"];
          // this.resetForm();
        });

    }

    ShouldBeHidden(
        Valid: boolean,
        Pristine: boolean,
        Submitted: boolean
    ): boolean {
        if (Submitted) {
            return Valid;
        } else {
            return Valid || Pristine;
        }
    }
}
