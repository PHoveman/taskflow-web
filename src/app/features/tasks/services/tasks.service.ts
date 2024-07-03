import { Injectable, WritableSignal } from '@angular/core';

import { TaskModel } from '../models/task.model';
import { DUMMY_TASKS } from './dummy-tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() {}

  public getTasks(): WritableSignal<TaskModel[]> {
    return DUMMY_TASKS
  }
}
