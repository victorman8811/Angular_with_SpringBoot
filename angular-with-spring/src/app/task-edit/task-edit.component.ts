import { Component, OnInit, Input } from '@angular/core';
import {TaskTableService} from '../task-table.service';
import { TaskTable } from '../task-table';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  @Input() isEdit?: boolean;

  @Input() editTask?: TaskTable = new TaskTable();

  @Input() taskList: TaskTable[]=[];




  constructor(private taskTableService: TaskTableService) { }

  ngOnInit(): void {
  }

  edit(name: string,description: string){


          /*const input = {} as TaskTable;
          input.name = name;
          input.description = description;*/

          let seq: number;
          seq  = this.editTask.seq;

          this.taskTableService.edit({ seq,name,description} as TaskTable)
                          .subscribe(taskList =>this.taskList = taskList);

      }


}
