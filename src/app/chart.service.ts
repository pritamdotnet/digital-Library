import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  // Bar chart data
  getBarChartData() {
    return [
      { data: [5, 8, 12, 7, 4], label: 'No. Of Books',backgroundColor:'blue' }
    ];
  }

  getBarChartLabels() {
    return ['Person 1', 'Person 2', 'Person 3', 'Person 4', 'Person 5'];
  }

  // Pie chart data
  getPieChartData() {
    return [
      { data: [14, 22, 33, 20, 11], label: 'No. Of Books' }
    ];
  }

  getPieChartLabels() {
    return ['Person 1', 'Person 2', 'Person 3', 'Person 4', 'Person 5'];
  }

}
