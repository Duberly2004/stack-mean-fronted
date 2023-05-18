export class Employee{
    _id:String
    name:String
    lastname:String
    age:String
    position:String
    office:String
    salary:Number
    createdAt:String
    updatedAt:String
    
    constructor(_id:"",name:"",lastname:"",age:"",position:"",office="",salary:0,createdAt:"",updatedAt:""){
        this._id = _id;
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.position = position;
        this.office = office;
        this.salary = salary;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;

    }
}