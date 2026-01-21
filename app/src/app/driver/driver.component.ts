import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  public Riders:any []=[];
  public Park:any []=[];
  public AirPorts:any []=[];

  public Station:any[]=[]

  constructor(public Attu:EmployeeService,
              public Parshu:EmployeeService,
              public Harshu:EmployeeService,
              public Ritesh:EmployeeService)
  {

  }

  ngOnInit():void
  {
    this.Riders=this.Attu.getDriver();
    this.Park=this.Parshu.getVehicles();
    this.AirPorts=this.Harshu.getFlights();
    this.Station=this.Ritesh.getTrains();
  }

}
