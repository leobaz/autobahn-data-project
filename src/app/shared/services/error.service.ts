import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private snackBar: MatSnackBar) {}

  public showErrorSnackBar(error: any | string, customDuration?: number): void {
    let errorMessage = '';
    if (typeof error === 'string') {
      errorMessage = error;
    } else {
      const { error: errorResponse } = error;
      errorMessage = errorResponse?.title || error.message;
    }

    this.snackBar.open(errorMessage || 'An error occured!', 'OK', {
      duration: customDuration || 4000,
    });
  }
}
