import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ToDo } from "../to-do";

@Component({
    selector: "ToDoItem",
    templateUrl: "./to-do-item.component.html",
    styleUrls: ["./to-do-item.component.css"]
})
export class ToDoItemComponent implements OnInit {
    constructor() {}

    @Input() ToDo;

    @Output() Deleted: EventEmitter<any> = new EventEmitter();

    ngOnInit() {}

    deleteItem(id) {
        this.Deleted.emit(id);
    }
}
