import { Component,ViewChild } from '@angular/core';
import {EmployeeComponent} from "../employee/employee.component";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {

  companyname: string = "ABC Company";
  
  @ViewChild(EmployeeComponent) emp!:EmployeeComponent;

  onClickMeClicked() {
    console.log(this.emp);
    this.emp.empname = "Ram";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
