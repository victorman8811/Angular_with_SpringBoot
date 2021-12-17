import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskTable } from './task-table';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskTableService {

  private usersUrl: string;
  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


    constructor(private http: HttpClient) {
      this.usersUrl = 'http://localhost:8080/';
    }

    public findAll(): Observable<TaskTable[]> {
      return this.http.get<TaskTable[]>(this.usersUrl);
    }

    public add(taskTable: TaskTable): Observable<TaskTable[]>{
      return this.http.post<TaskTable[]>(this.usersUrl, taskTable);
    }

    public delete(id: number): Observable<TaskTable[]>{

      return this.http.delete<TaskTable[]>(this.usersUrl+id);

    }

    public edit(task: TaskTable): Observable<TaskTable[]>{

      return this.http.put<TaskTable[]>(this.usersUrl,task);
    }
}
