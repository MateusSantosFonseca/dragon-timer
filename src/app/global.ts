import { Injectable } from '@angular/core';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  config = new MatSnackBarConfig();

  constructor(private snackBar: MatSnackBar) { 
    this.config.panelClass = ['snackbar-customizado']; 
  }

  openSnackBar(message: string, timeDuration: number, action?: string, ) {
    this.config.duration = timeDuration;
    this.snackBar.open(message, action, this.config);
  }
}
