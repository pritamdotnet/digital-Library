import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  private books = [
    { id: 1, name: 'Book 1', author: 'Author 1', publication: 'Publisher 1', quantity: 10, price: 25.99, branch: 'Branch 1' },
    { id: 2, name: 'Book 2', author: 'Author 2', publication: 'Publisher 2', quantity: 5, price: 15.49, branch: 'Branch 2' },
    { id: 3, name: 'Book 3', author: 'Author 3', publication: 'Publisher 3', quantity: 10, price: 20.00, branch: 'Branch 3' },
    { id: 4, name: 'Book 4', author: 'Author 4', publication: 'Publisher 4', quantity: 5, price: 15.49, branch: 'Branch 4' },
    { id: 5, name: 'Book 5', author: 'Author 5', publication: 'Publisher 5', quantity: 12, price: 20.00, branch: 'Branch 5' },
    { id: 6, name: 'Book 6', author: 'Author 6', publication: 'Publisher 6', quantity: 54, price: 15.49, branch: 'Branch 6' },
    { id: 7, name: 'Book 7', author: 'Author 7', publication: 'Publisher 7', quantity: 5, price: 20.00, branch: 'Branch 7' },


  ];

  private issuedBooks = [
    { isbn: '12345', name: 'Angular Guide', author: 'Author 1', rollNo: '101', studentName: 'John Doe', issuedOn: '2024-10-01' },
    { isbn: '67890', name: 'Learning TypeScript', author: 'Author 2', rollNo: '102', studentName: 'Jane 1', issuedOn: '2024-10-03' },
    { isbn: '67891', name: 'Learning javaScript', author: 'Author 3', rollNo: '103', studentName: 'pritam kr', issuedOn: '2024-11-03' },
    { isbn: '67892', name: 'Learning TypeScript', author: 'Author 4', rollNo: '104', studentName: 'shivam m', issuedOn: '2024-10-03' },
    { isbn: '67893', name: 'Learning javaScript', author: 'Author 5', rollNo: '105', studentName: 'sonu d', issuedOn: '2024-11-03' },
    { isbn: '67894', name: 'Learning TypeScript', author: 'Author 6', rollNo: '106', studentName: 'ashish k', issuedOn: '2024-10-03' },

  ];

  getBooks() {
    return this.books;
  }

  getIssuedBooks() {
    return this.issuedBooks;
  }
}
