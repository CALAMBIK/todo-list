import { Injectable } from '@angular/core';
import { Task } from './todo/todo.interface';

@Injectable({ providedIn: 'root' })
export class LocalStorageApi {
  public getItem(): string | null {
    return localStorage.getItem('jwtToken');
  }

  public setItem(data: string) {
    localStorage.setItem('jwtToken', data);
  }

  public addItem(data: Task): void {
    let tasksData = this.getItem();
    if (tasksData) {
      let parsedData: Task[] = JSON.parse(tasksData);
      if (typeof parsedData === 'object' && parsedData !== null) {
        let newData = [...parsedData, data];
        this.setItem(JSON.stringify(newData));
      } else {
        console.error('Invalid data format in storage');
      }
    } else {
      let newData = [data];
      this.setItem(JSON.stringify(newData));
    }
  }

  public editItem(data: Task): void {
    let tasksData = this.getItem();
    if (tasksData) {
      let parcedData: Task[] = JSON.parse(tasksData);
      let newParcedData = parcedData.map((task) =>
        task.id === data.id ? data : task
      );
      this.setItem(JSON.stringify(newParcedData));
    } else {
      return;
    }
  }

  public changeStatusItem(data: Task): void {
    let tasksData = this.getItem();
    if (tasksData) {
      let parcedData: Task[] = JSON.parse(tasksData);
      let newParcedData = parcedData.map((task) =>
        task.id === data.id ? { ...task, status: !task.status } : task
      );
      this.setItem(JSON.stringify(newParcedData));
    } else {
      return;
    }
  }

  public removeItem(id: number) {
    let usersData = this.getItem();
    if (usersData) {
      const parsedData: Task[] = JSON.parse(usersData);
      parsedData.splice(parsedData.map((el) => el.id).indexOf(id), 1);
      if (!parsedData.length) {
        localStorage.removeItem('jwtToken');
        return;
      }
      localStorage.setItem('jwtToken', JSON.stringify(parsedData));
    } else {
      return;
    }
  }
}
