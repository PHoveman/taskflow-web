import { Routes } from '@angular/router';
import { boardRoutes } from '@features/board/board.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'board', pathMatch: 'full' },
  { path: 'board', loadChildren: () => boardRoutes },
]
