import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {


  public Riders:any []=[];
  
    constructor(public empService:EmployeeService)
    {
  
    }
  
    ngOnInit():void
    {
       this.empService.getEmployees().subscribe(data=>{
        this.Riders=data;
       })
    }

}
