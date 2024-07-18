import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild, ViewChildren, WritableSignal, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PriorityPillComponent } from '@shared/components/priority-pill/priority-pill.component';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { AddTaskDialogComponent } from './components/add-task-dialog/add-task-dialog.component';
import { BoardService } from './services/board.service';
import { BoardColumn, BoardDataObj } from './types/board-types.type';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    CdkDropList,
    CdkDrag,
    CdkDropListGroup,
    MatIconModule,
    PriorityPillComponent,
    MatProgressSpinnerModule
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit {
  columns: WritableSignal<BoardColumn[]> = signal([])
  isDragging = signal<boolean>(false)
  isLoading = signal<boolean>(false)
  selectedTask = signal<BoardDataObj | undefined>(undefined)

  @ViewChildren('columnList') columnList!: CdkDropList<BoardDataObj>[]

  @ViewChild('taskEl', { static: false }) taskEl!: ElementRef

  constructor(private boardService: BoardService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.isLoading.set(true)

    forkJoin([this.boardService.getColumns()]).subscribe({
      next: ([columns]) => {
        this.columns.set(columns)
        this.isLoading.set(false)
      },
      error: (err) => {
        console.error(err)
        this.isLoading.set(false)
      }
    })
  }

  public drop(event: CdkDragDrop<BoardDataObj[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      )
    }

    this.isDragging.set(false)
  }

  public addTask(column: BoardColumn) {
    this.dialog.open(AddTaskDialogComponent, {
      width: '400px',
      data: { column }
    })
  }
}
