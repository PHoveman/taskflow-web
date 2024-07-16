import { Observable, of } from "rxjs";
import { BoardColumn } from "../types/board-types.type";

export const DUMMY_COLUMNS: Observable<BoardColumn[]> = of([
  {
    id: '1',
    title: 'To Do',
    data: [
      { id: '101', title: 'Get to work', priority: 1 },
      { id: '102', title: 'Pick up groceries', priority: 3 },
      { id: '103', title: 'Go home', priority: 2 },
      { id: '104', title: 'Fall asleep', priority: 2 }
    ]
  },
  {
    id: '2',
    title: 'In progress',
    data: [
      { id: '105', title: 'Cook dinner', priority: 2 },
      { id: '106', title: 'Edit film', priority: 3 }
    ]
  },
  { 
    id: '3',
    title: 'Done',
    data: [
      { id: '107', title: 'Get up', priority: 3 },
      { id: '108', title: 'Brush teeth', priority: 2 },
      { id: '109', title: 'Take a shower', priority: 3 },
      { id: '110', title: 'Check e-mail', priority: 1 },
      { id: '111', title: 'Walk dog', priority: 2 }
    ]
  }
])