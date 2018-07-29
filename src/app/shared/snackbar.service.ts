import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(public snackBar: MatSnackBar) { }

  openSnackbar(message: string): void {
    this.snackBar.open(message, undefined, { duration: 1000, });
  }
}
