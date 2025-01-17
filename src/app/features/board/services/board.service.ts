import { Injectable } from '@angular/core';
import { DUMMY_COLUMNS } from './dummy-boards';
import { delay } from 'rxjs/internal/operators/delay';

@Injectable({ providedIn: 'root' })
export class BoardService {

  constructor() {}

  getColumns() {
    return DUMMY_COLUMNS.pipe(
      delay(1000)
    )
  }

  addTask() {
    
  }
}
