import { Component, OnInit } from '@angular/core';
import {  ChartType,ChartData  } from 'chart.js';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Modal } from 'bootstrap';
import * as bootstrap from 'bootstrap';
import { ChartService } from '../chart.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  addBookForm!: FormGroup;
 //  branches = ['IT', 'Civil', 'Mechanical'];
  branches: string[] = ['IT', 'Civil', 'Mechanical']; 
  //books!: FormGroup;
  books = [
    { id: 1, name: 'Book 1', author: 'Author 1', publication: 'Publisher 1', quantity: 10, price: 25.99, branch: 'Branch 1' },
    { id: 2, name: 'Book 2', author: 'Author 2', publication: 'Publisher 2', quantity: 5, price: 15.49, branch: 'Branch 2' },
  ];
 

    // Bar chart data
//     public barChartOptions = {
//       scaleShowVerticalLines: false,
//       responsive: true,
//     };
//     public barChartLabels = ['Person 1', 'Person 2', 'Person 3', 'Person 4', 'Person 5'];
//     public barChartType:ChartType = 'bar';
//     public barChartLegend = true;
//     public barChartData = [
//       { data: [5, 8, 12, 7, 4], label: 'No. Of Books',backgroundColor:'blue' }
//     ];
  
//     // Pie chart data
//     public pieChartLabels = ['Person 1', 'Person 2', 'Person 3', 'Person 4', 'Person 5'];
//     public pieChartData = [
//       { data: [14, 22, 33, 20, 11], label: 'No. Of Books',
//         backgroundColor:['#2B65BDFF','#DF7117FF','#b0b0a8','#DDBE0EF1','#73ABF5EF']
//        }
//     ];
//     public pieChartType:ChartType = 'pie';
//     public pieChartLegend = true;
//   public pieChartOptions = {
//   responsive: true,
//   maintainAspectRatio: false,  
//   aspectRatio: 1.5  
// };


public barChartOptions = {
  scaleShowVerticalLines: false,
  responsive: true,
};
public barChartLabels: string[] = [];
public barChartType:ChartType = 'bar';
public barChartLegend = true;
public barChartData: any[] = [];

public pieChartLabels: string[] = [];
public pieChartData: any[] = [];
public pieChartType:ChartType = 'pie';
public pieChartLegend = true;
public pieChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 1.5,
};


  
    // Issued Book Summary data
    issuedBooks = [
      { isbn: '12345', name: 'Angular Guide', author: 'Author 1', rollNo: '101', studentName: 'John Doe', issuedOn: '2024-10-01' },
      { isbn: '67890', name: 'Learning TypeScript', author: 'Author 2', rollNo: '102', studentName: 'Jane Smith', issuedOn: '2024-10-03' },
      // Add more sample data as needed
    ];

    constructor(private fb: FormBuilder,private chartService: ChartService ) { }

    ngOnInit(): void {
    // Load Bar Chart Data
    this.barChartData = this.chartService.getBarChartData();
    this.barChartLabels = this.chartService.getBarChartLabels();

    // Load Pie Chart Data
    this.pieChartData = this.chartService.getPieChartData();
    this.pieChartLabels = this.chartService.getPieChartLabels();


      this.addBookForm = this.fb.group({
        isbn: ['', [Validators.required, Validators.pattern('^[0-9]*$'),Validators.minLength(5), Validators.maxLength(50)]],
        name: ['', [Validators.required,Validators.pattern("^[a-zA-Z\\s]*$"), Validators.minLength(5), Validators.maxLength(50)]],
        author: ['', [Validators.required,Validators.pattern("^[a-zA-Z\\s]*$"), Validators.minLength(5), Validators.maxLength(50)]],
        publication: ['', [Validators.required,Validators.pattern("^[a-zA-Z\\s]*$"), Validators.minLength(5), Validators.maxLength(50)]],
        details: ['', [Validators.required,Validators.pattern("^[a-zA-Z0-9\\s]*$"), Validators.minLength(5), Validators.maxLength(250)]],
        qty: ['', [Validators.required,Validators.pattern('^[0-9]*$'), Validators.min(1), Validators.max(5)]],
        price: ['', [Validators.required,Validators.pattern('^[0-9]*$'), Validators.min(5), Validators.max(50)]],
        branch: ['', Validators.required],
      });
    }
    openAddBookModal() {
      const modalElement = document.getElementById('addBookModal') as HTMLElement;
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
    submitAddBookForm() {
      if (this.addBookForm && this.addBookForm.valid) {
        console.log('Form Submitted', this.addBookForm.value);
        
      }
    }

    openDeleteBookModal() {
    
      const modalElement = document.getElementById('deleteBookModal') as HTMLElement;
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
    deleteBook(id: number) {
      // Implement your delete logic here
     // this.books = this.books.filter(book => book.id !== id);
      alert('Book deleted successfully!');
    }

    openViewBookModal() {
      const modalElement = document.getElementById('viewBookModal') as HTMLElement;
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }

}
