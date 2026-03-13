import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './profile-card/profile-card';
import { TodoItem } from './todo-item/todo-item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCard, TodoItem],
  // templateUrl: './app.html',
  template: `
    <div class="app">
        <h1>My Todo App</h1>
        <app-todo-item></app-todo-item>
    </div>
  `,
  styleUrl: './app.css',
})
export class App {
  // protected readonly title = signal('users');
  title = 'standalone-demo';
}
