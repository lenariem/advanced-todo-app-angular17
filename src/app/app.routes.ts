import { Routes } from '@angular/router';

import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
  },
 /*  {
    path: 'tasks',
    component: TasksComponent,
    children: [
      {
        path: ':userId',
        component: UserTasksComponent,
      },
    ],
  }, */
];
