import { CommonModule, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { TaskCompletionCalcPipe } from './pipes/task-completion-calc.pipe';
import { TaskModel } from './models/task.model';
import { TaskStatusEnum } from '@features/enums/task-status.enum';
import { TasksService } from './services/tasks.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [MatIconModule, CommonModule, FormsModule, TaskCompletionCalcPipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {
  tasks: WritableSignal<TaskModel[]> = signal([])

  constructor(private tasksService: TasksService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks()
  }

  public openTaskDialogHandler(data?: TaskModel | undefined): void {
    this.dialog.open(TaskDialogComponent, {
      width: '800px',
      data: data
    })
  }
}
