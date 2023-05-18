export class User{
    _id:String
    username: String
    email: String
    password: String
    createdAt:String
    updatedAt:String

    constructor(_id:"",username:"",email:"",password:"",createdAt:"",updatedAt:""){
        this._id=_id
        this.username = username
        this.email = email
        this.password = password
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}