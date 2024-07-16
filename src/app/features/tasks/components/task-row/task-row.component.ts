import { CommonModule } from '@angular/common';
import { Component, OnInit, WritableSignal, computed, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SubTaskModel } from '@features/tasks/models/sub-task.model';

import { TaskModel } from '@features/tasks/models/task.model';
import { TaskCompletionCalcPipe } from '@features/tasks/pipes/task-completion-calc.pipe';
import { TaskTDProgressComponent } from '../task-td-progress/task-td-progress.component';
import { TaskTDStatusComponent } from '../task-td-status/task-td-status.component';

@Component({
  selector: 'app-task-row',
  standalone: true,
  imports: [MatIconModule, CommonModule, FormsModule, TaskCompletionCalcPipe, TaskTDStatusComponent, TaskTDProgressComponent],
  templateUrl: './task-row.component.html',
  styleUrl: './task-row.component.scss'
})
export class TaskRowComponent implements OnInit {
  task = input.required<TaskModel>()
  isOpen = input.required<boolean>()
  onToggleOpenTask = output<string | undefined>()
  onRemoveTask = output<string>()

  subTasks: WritableSignal<SubTaskModel[]> = signal([])

  ngOnInit(): void {
    this.subTasks.set(this.task().subTasks)
  }
  
  tasksRemaining = computed(() => {
    return this.subTasks().reduce((acc, subTask) => {
      if (subTask.isCompleted) acc--
      return acc
    }, this.subTasks().length)
  })

  public openTaskHandler(id: string | undefined): void {
    this.onToggleOpenTask.emit(id)
  }

  public actionSubTaskHandler(id: string): void {
    this.subTasks.update(subTasks => {
      return subTasks.map(subTask => subTask.id === id ? { ...subTask, isCompleted: !subTask.isCompleted } : subTask)
    })
  }

  public removeTaskHandler(id: string) {
    this.onRemoveTask.emit(id)
  }
}
