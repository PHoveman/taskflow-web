import { Component, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { TaskModel } from '@features/tasks/models/task.model';

@Component({
  selector: 'app-task-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './task-dialog.component.html',
  styleUrl: './task-dialog.component.scss'
})
export class TaskDialogComponent implements OnInit {
  data: TaskModel | undefined = inject(MAT_DIALOG_DATA)

  constructor(private dialogRef: MatDialogRef<TaskDialogComponent>) {}

  ngOnInit(): void {
    
  }
}
