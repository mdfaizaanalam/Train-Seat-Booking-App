import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numSeatsToBook: number = 0;
  seats: boolean[][] = []; // 2D array representing seat availability
  bookedSeats: number[] = []; // List of booked seat numbers
  availableSeats: number[] = []; // List of available seat numbers



  initializeSeats(): void {
    // Initialize 80 seats: 10 rows of 7 seats each, and 1 row of 3 seats
    this.seats = [];
    this.bookedSeats = [];
    this.availableSeats = [];
    for (let i = 0; i < 11; i++) {
      this.seats.push(new Array(7).fill(false)); // Each of the first 10 rows has 7 seats
    }
    this.seats.push(new Array(3).fill(false)); // Last row has 3 seats

    // Populate available seat numbers
    this.updateAvailableSeats();
  }

  bookSeats(): void {
    if (this.numSeatsToBook < 1 || this.numSeatsToBook > 7) {
      alert('Please enter a number between 1 and 7.');
      return;
    }


  resetSeats(): void {
    this.initializeSeats();
  }




        }
      }
    }
  }
}
