import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { IEmployees } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService  {
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

      getVehicles() {
            return [
              { id: 301, model: 'Tata Ace', type: 'Mini Truck', capacity: '750kg', fuel: 'Diesel' },
              { id: 302, model: 'Ashok Leyland', type: 'Bus', capacity: '40 Seats', fuel: 'Diesel' },
              { id: 303, model: 'Maruti Dzire', type: 'Car', capacity: '5 Seats', fuel: 'Petrol' },
              { id: 304, model: 'Mahindra Bolero', type: 'SUV', capacity: '7 Seats', fuel: 'Diesel' },
              { id: 305, model: 'Tata Magic', type: 'Van', capacity: '10 Seats', fuel: 'CNG' }
            ];
          }


        getFlights() {
            return [
              { id: 301, model: 'Tata Ace', type: 'Mini Truck', capacity: '750kg', fuel: 'Diesel' },
              { id: 302, model: 'Ashok Leyland', type: 'Bus', capacity: '40 Seats', fuel: 'Diesel' },
              { id: 303, model: 'Maruti Dzire', type: 'Car', capacity: '5 Seats', fuel: 'Petrol' },
              { id: 304, model: 'Mahindra Bolero', type: 'SUV', capacity: '7 Seats', fuel: 'Diesel' },
              { id: 305, model: 'Tata Magic', type: 'Van', capacity: '10 Seats', fuel: 'CNG' }
            ];
          }

          getTrains() {
            return [
              { id: 11, trainNo: '12627', name: 'Karnataka Exp', coach: 'Sleeper' },
              { id: 12, trainNo: '12951', name: 'Rajdhani Exp', coach: 'AC' },
              { id: 13, trainNo: '12008', name: 'Shatabdi Exp', coach: 'AC Chair Car' },
              { id: 14, trainNo: '11013', name: 'Coimbatore Exp', coach: 'Sleeper' },
              { id: 15, trainNo: '12724', name: 'Telangana Exp', coach: 'Sleeper' },
              { id: 16, trainNo: '12296', name: 'Sanghamitra Exp', coach: 'AC' },
              { id: 17, trainNo: '12649', name: 'Sampark Kranti', coach: 'Sleeper' },
              { id: 18, trainNo: '12841', name: 'Coromandel Exp', coach: 'AC' },
              { id: 19, trainNo: '12903', name: 'Golden Temple', coach: 'Sleeper' },
              { id: 20, trainNo: '12616', name: 'Grand Trunk Exp', coach: 'AC' }
            ];
          }




          private URL:string = '/assets/DATA/employees.json';
        constructor(private http:HttpClient) {

        }

        getEmployees(): Observable<IEmployees[]> {
         return this.http.get<IEmployees[]>(this.URL);
      }


}
