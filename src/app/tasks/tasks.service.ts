import { Injectable, signal } from '@angular/core';

import { type NewTaskData } from './task/task.model';

// service a part of lazy load in providers in user.routes, thats why no ({ providedIn: 'root' })

@Injectable()
export class TasksService {
  private tasks = signal([
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'User Testing',
      summary: 'Conduct user testing for the prototype and gather feedback.',
      dueDate: '2024-06-15',
  },
  {
      id: 't5',
      userId: 'u4',
      title: 'Final Design Review',
      summary: 'Review and finalize the design based on user feedback.',
      dueDate: '2024-06-30',
  },
  {
      id: 't6',
      userId: 'u5',
      title: 'Launch Marketing Campaign',
      summary: 'Prepare and launch the marketing campaign for the product launch.',
      dueDate: '2024-07-15',
  },
  {
      id: 't7',
      userId: 'u6',
      title: 'Develop Backend Features',
      summary: 'Implement backend features necessary for the online shop.',
      dueDate: '2024-07-30',
  }
  ]);

  allTasks = this.tasks.asReadonly();

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks.set(JSON.parse(tasks));
    }
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.update((prevTasks) => [
      {
        id: new Date().getTime().toString(),
        userId: userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date,
      },
      ...prevTasks,
    ]);
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks.update((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }
}
