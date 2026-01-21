import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  

      public employees: any[] = [];
      public customer:any[]=[];

      constructor(private guru:EmployeeService,
                  private sidd:EmployeeService)
      {
          
      }
      
      ngOnInit(): void {
        this.employees=this.guru.getEmployees(); 
        this.customer=this.sidd.getCustomer();
      }
}
