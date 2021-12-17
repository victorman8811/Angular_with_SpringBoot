import { Component, OnInit } from '@angular/core';
import {TaskTableService} from '../task-table.service';
import { TaskTable } from '../task-table';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskList: TaskTable[]=[];
  isEdit: boolean = false;

  editTask?: TaskTable;

  isDisabled: string = "disabled";

  deleteControll: string = "";
  editControll: string = "";

  constructor(private taskTableService: TaskTableService) {

    this.findAll();

  }

  ngOnInit(): void {
  }

  findAll(){
    this.taskTableService.findAll()
            .subscribe(taskList =>
              this.taskList = taskList);
  }

  delete(seq: number){

    this.taskTableService.delete(seq)
                .subscribe(taskList =>
                  this.taskList = taskList);


  }

  edit(selectedTask: TaskTable){

    this.editTask = selectedTask;
    this.isEdit = true;
    this.deleteControll = "disabled";
    this.editControll = "disabled";


  }

  add(name: string,description: string){


        /*const input = {} as TaskTable;
        input.name = name;
        input.description = description;*/

        this.taskTableService.add({name,description} as TaskTable)
                        .subscribe(taskList =>this.taskList = taskList);

    }

}
