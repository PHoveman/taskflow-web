import { Injectable, WritableSignal } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';
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

  public add(newTask: TaskModel) {
    return DUMMY_TASKS.update(tasks => [...tasks, { ...newTask, id: uuidv4(), subTasks: newTask.subTasks.map(task => ({ ...task, id: uuidv4()}) ) }])
  }

  public delete(id: string) {
    return DUMMY_TASKS.update(tasks => tasks.filter(task => task.id !== id))
  }
}
