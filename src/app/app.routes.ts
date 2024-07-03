import { Routes } from '@angular/router';
import { TasksComponent } from './features/tasks/tasks.component';
import { tasksRoutes } from './features/tasks/tasks.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', loadChildren: () => tasksRoutes },
]
