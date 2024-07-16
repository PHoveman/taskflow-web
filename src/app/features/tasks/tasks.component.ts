import { CommonModule } from '@angular/common';
import { Component, OnInit, WritableSignal, computed, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';
import { TaskRowComponent } from './components/task-row/task-row.component';
import { TaskModel } from './models/task.model';
import { TaskCompletionCalcPipe } from './pipes/task-completion-calc.pipe';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [MatIconModule, CommonModule, FormsModule, TaskCompletionCalcPipe, TaskRowComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {
  tasks: WritableSignal<TaskModel[]> = signal([])
  openedTaskId: WritableSignal<string | undefined> = signal(undefined)
  searchQuery = model<string>('')

  filteredTasks = computed(() => this.tasks().filter(x => x.title.toLowerCase().includes(this.searchQuery().toLowerCase())))

  constructor(
    private tasksService: TasksService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks()
  }

  public openTaskDialogHandler(data?: TaskModel | undefined) {
    this.dialog.open(TaskDialogComponent, {
      width: '800px',
      data: data
    })
  }

  public openTaskHandler(id: string | undefined) {
    this.openedTaskId.update(val => val === id ? undefined : id)
  }

  public removeTask(id: string) {
    this.tasksService.delete(id)
  }
}
