import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';

import { SubTaskModel } from '@features/tasks/models/sub-task.model';
import { TaskCompletionCalcPipe } from '@features/tasks/pipes/task-completion-calc.pipe';

@Component({
  selector: 'app-task-td-status',
  standalone: true,
  imports: [TaskCompletionCalcPipe, NgClass],
  templateUrl: './task-td-status.component.html',
  styleUrl: './task-td-status.component.scss'
})
export class TaskTDStatusComponent {
  widthPercentage = input.required({
    alias: 'subTasks',
    transform: (subTasks: SubTaskModel[]) => {
      return new TaskCompletionCalcPipe().transform(subTasks)
    }
  })

  status = computed(() => {
    switch(this.widthPercentage()) {
      case(0): return { status: 'Not started', class: 'not-started' }
      case(100): return { status: 'Completed', class: 'completed' }
      default: return { status: 'In progress', class: 'in-progress' }
    }
  })
}
