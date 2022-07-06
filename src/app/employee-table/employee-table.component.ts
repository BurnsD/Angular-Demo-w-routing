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

  employees:Employee[] = []
  constructor(empService:EmployeeService){
    this.employees = (empService.getEmployeeInfo())
  }
}
