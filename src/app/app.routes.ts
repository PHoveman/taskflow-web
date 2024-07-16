import { Routes } from '@angular/router';
import { boardRoutes } from '@features/board/board.routes';
import { tasksRoutes } from './features/tasks/tasks.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', loadChildren: () => tasksRoutes },
  { path: 'board', loadChildren: () => boardRoutes }
]
