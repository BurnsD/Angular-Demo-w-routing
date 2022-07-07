import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../shared/models/employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
})
export class EmployeeTableComponent {
  title = "Employee Table"

  headers = ["Name", "ID", "Salary", "Title"]

  employees:any= []
  constructor(empService:EmployeeService){
   empService.getEmployeeInfo().subscribe(res => this.employees = res)
  }
}
