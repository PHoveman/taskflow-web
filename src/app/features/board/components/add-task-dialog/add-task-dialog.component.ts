import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BoardColumn } from '@features/board/types/board-types.type';
import { PriorityPillComponent } from '@shared/components/priority-pill/priority-pill.component';

@Component({
  selector: 'app-add-task-dialog',
  standalone: true,
  imports: [FormsModule, PriorityPillComponent],
  templateUrl: './add-task-dialog.component.html',
  styleUrl: './add-task-dialog.component.scss'
})
export class AddTaskDialogComponent implements OnInit {
  data: { column: BoardColumn } = inject(MAT_DIALOG_DATA)
  title: string | undefined
  priority: 1 | 2 | 3 = 2
  isLoading = signal<boolean>(false)

  constructor(private dialogRef: MatDialogRef<AddTaskDialogComponent>) {}

  ngOnInit(): void {
    console.log('this.data', this.data)
  }

  public addTask() {
    this.isLoading.set(true)

    console.log('AddTask method')
    this.dialogRef.close()
  }
}
