import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit {

  constructor() {

   }

    getEmployees() {
    return [
      { id: 1, name: 'Rahul', age: 25 },
      { id: 2, name: 'Anita', age: 28 },
      { id: 3, name: 'Suresh', age: 32 },
      { id: 4, name: 'Priya', age: 24 },
      { id: 5, name: 'Vikram', age: 35 }
    ];
  }

  ngOnInit(): void {
      }
}
