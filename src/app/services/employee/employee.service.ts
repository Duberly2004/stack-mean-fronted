import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../../../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  URL_API = 'http://localhost:3000/api/employees';
  selectedEmployee: Employee = new Employee("","","","","","",0,"","");
  employees : Employee[] = [];
  isEditMode: boolean = false;
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(this.URL_API);
  }  
  createEmployee(employee: Employee){
    return this.http.post(this.URL_API, employee)
  }
  deleteEmployee(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
  updateEmployee(employee: Employee){
    return this.http.put(`${this.URL_API}/${employee._id}`,employee)
  }

}
