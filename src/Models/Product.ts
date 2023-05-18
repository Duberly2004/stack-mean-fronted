export class Product{

    _id:String
    name:String
    price:Number
    brand:String
    qualiti:String
    createdAt:String
    updatedAt:String

    constructor(_id:"",name:"",price:0,brand:"",qualiti="",createdAt:"",updatedAt:""){
        this._id=_id
        this.name = name
        this.price = price
        this.brand = brand
        this.qualiti =qualiti
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}