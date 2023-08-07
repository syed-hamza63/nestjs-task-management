import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTask(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  createTask(title: string, description: string): Task {
    const id = new Date().toISOString();
    const task: Task = {
      id,
      title,
      description,
      status: TaskStatus.OPEN
    }
    this.tasks.push(task)
    return task
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }

  updateTaskStatus(id: string, taskStatus: TaskStatus): Task {
    let task = this.getTaskById(id)
    task.status = taskStatus

    return task
  }
}
