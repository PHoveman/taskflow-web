import { CommonModule } from '@angular/common';
import { Component, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SubTaskModel } from '@features/tasks/models/sub-task.model';

import { TaskModel } from '@features/tasks/models/task.model';
import { TasksService } from '@features/tasks/services/tasks.service';

@Component({
  selector: 'app-task-dialog',
  standalone: true,
  imports: [MatDialogModule, FormsModule, CommonModule],
  templateUrl: './task-dialog.component.html',
  styleUrl: './task-dialog.component.scss'
})
export class TaskDialogComponent {
  title = signal<string | undefined>(undefined)
  notes = signal<string | undefined>(undefined)
  dateDue = model<Date | undefined>(undefined)
  priority = model<number>(2)
  subTasks = signal<SubTaskModel[]>([])

  data: TaskModel | undefined = inject(MAT_DIALOG_DATA)

  constructor(
    private dialogRef: MatDialogRef<TaskDialogComponent>,
    private tasksService: TasksService
  ) {}

  public addSubTaskHandler() {
    this.subTasks.update(tasks => tasks = [...tasks, Object.assign(new SubTaskModel, { title: undefined, isCompleted: false })])
  }

  public addTaskHandler() {
    const newTask = Object.assign(new TaskModel, {
      title: this.title(),
      notes: this.notes(),
      dateDue: this.dateDue(),
      priority: this.priority(),
      subTasks: this.subTasks()
    })

    this.tasksService.add(newTask)
    console.log('newTask', newTask)
    this.dialogRef.close()
  }
}
