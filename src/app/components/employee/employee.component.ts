import { Component } from '@angular/core';
import {EmployeeService} from '../../services/employee/employee.service'
import {NgForm} from '@angular/forms';
import {Employee} from '../../../Models/Employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  constructor(public employeeService: EmployeeService){}

  ngOnInit(): void {
    this.getEmployees();
  }
  resetForm(form: NgForm){
    form.reset();
  }

  async getEmployees(){
     return await this.employeeService.getEmployees().subscribe(
      (res)=>{
        this.employeeService.employees = res
      },
      (err) => console.log(err)
     );
  }

  async addEmployee(form: NgForm){
    if(this.employeeService.isEditMode){
      await this.employeeService.updateEmployee(form.value).subscribe(
        (res)=>{
          this.getEmployees()
          this.resetForm(form)
          console.log(res)
        },
        (err)=>console.log(err)
        ) 

    }else{
      console.log(form.value)
      await this.employeeService.createEmployee(form.value).subscribe(
        (res)=>{
          this.getEmployees()
          console.log(res)
        },
        (err)=>console.log(err)
        )
      }
  }

  async deleteEmployee(employee:Employee){
    if (confirm('Are you sure you want to delete this employee?')){
      await this.employeeService.deleteEmployee(`${employee._id}`).subscribe(
        (res)=>{
          this.getEmployees()
          console.log(res)
        },
        (err)=>{
          console.log(err)
        }
      )
    }else{
      console.log('Cancel')
    }
  }

  updateEmployee(employee:Employee){
    this.employeeService.selectedEmployee=employee;
    this.employeeService.isEditMode = true;

    console.log(employee)
  }
}
