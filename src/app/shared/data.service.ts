import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  connection = new signalR.HubConnectionBuilder().withUrl('https://localhost:5001/dataHub').build();

  constructor() {
    this.connection.start().catch((err: any) => console.log(err));
  }

  login(username: string, password: string): void {
    this.connection.invoke('Login', username, password).catch(err => console.log(err));
  }

  add(username: string, password: string): void {
    this.connection.invoke('Register', username, password).catch(err => console.log(err));
  }

  getEntries(username: string): void {
    this.connection.invoke('GetEntries', username).catch(err => console.log(err));
  }
}
