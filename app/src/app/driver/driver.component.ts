import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  public Riders:any []=[];

  constructor(public Attu:EmployeeService)
  {

  }

  ngOnInit():void
  {
    this.Riders=this.Attu.getDriver();
  }

}
