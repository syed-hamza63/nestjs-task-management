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

  createTask(title: string, description: string, dueDate: string): Task {
    const id = new Date().toISOString();
    const createdAt = new Date().toISOString();
    const updatedAt = new Date().toISOString();
    const task: Task = {
      id,
      title,
      description,
      dueDate,
      status: TaskStatus.OPEN,
      createdAt,
      updatedAt,
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
    task.updatedAt = new Date().toISOString();

    return task
  }
}
