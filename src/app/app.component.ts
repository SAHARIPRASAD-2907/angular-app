import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { UserParts } from './components/user/user.types';
import { DUMMY_USERS } from './components/user/users';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';
  protected user:UserParts[] = DUMMY_USERS
  selectedUserId?:string;

  get selectedUser():UserParts{
    return this.user.find((user) => user.id === this.selectedUserId) as UserParts
  }

  onSelectedUser(id: string){
    this.selectedUserId = id;
  }

}
