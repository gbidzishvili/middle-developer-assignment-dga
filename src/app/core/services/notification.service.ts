import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; // Using Angular Material Snackbar

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  snackBar = inject(MatSnackBar);
  showError(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['error-snackbar'],
    });
  }
}
