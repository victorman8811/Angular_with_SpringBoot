import { Component, OnInit, Input } from '@angular/core';
import {TaskTableService} from '../task-table.service';
import { TaskTable } from '../task-table';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  @Input() isEdit?: boolean;

  @Input() editTask?: TaskTable;

  @Input() taskList: TaskTable[]=[];

  @Output() isAdd = new EventEmitter<boolean>();





  constructor(private taskTableService: TaskTableService) { }

  ngOnInit(): void {
  }

  edit(){


          /*const input = {} as TaskTable;
          input.name = name;
          input.description = description;*/

          console.log(this.editTask);
          this.taskTableService.edit(this.editTask as TaskTable)
                          .subscribe();
          this.submit();

      }

  submit(){

    this.isAdd.emit(true);
    this.isEdit = false;

  }


}
