import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService  {

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




        getCustomer() {
        return [
          { id: 101, name: 'Amit', age: 30, department: 'IT', salary: 50000 },
          { id: 102, name: 'Neha', age: 27, department: 'HR', salary: 42000 },
          { id: 103, name: 'Ravi', age: 35, department: 'Finance', salary: 60000 },
          { id: 104, name: 'Pooja', age: 26, department: 'Marketing', salary: 38000 },
          { id: 105, name: 'Karan', age: 32, department: 'IT', salary: 55000 }
        ];
      }

      getDriver() {
        return [
          { id: 201, name: 'Ramesh', vehicle: 'Truck', experience: 8, licenseType: 'Heavy' },
          { id: 202, name: 'Sanjay', vehicle: 'Bus', experience: 12, licenseType: 'Heavy' },
          { id: 203, name: 'Mahesh', vehicle: 'Car', experience: 5, licenseType: 'LMV' },
          { id: 204, name: 'Ajay', vehicle: 'Taxi', experience: 6, licenseType: 'LMV' },
          { id: 205, name: 'Vijay', vehicle: 'Van', experience: 10, licenseType: 'Heavy' }
        ];
      }



  
}
