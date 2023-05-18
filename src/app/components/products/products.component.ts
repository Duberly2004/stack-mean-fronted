import { Component } from '@angular/core';
import {ProductService} from '../../services/product/product.service'
import {NgForm} from '@angular/forms';
import {Product} from '../../../Models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(public productService: ProductService){}

  ngOnInit(): void {
    this.getProducts();
  }
  resetForm(form: NgForm){
    form.reset();
  }

  async getProducts(){
     return await this.productService.getProducts().subscribe(
      (res)=>{
        this.productService.products = res
      },
      (err) => console.log(err)
     );
  }

  async addProduct(form: NgForm){
    if(this.productService.isEditMode){
      await this.productService.updateProduct(form.value).subscribe(
        (res)=>{
          this.getProducts()
          this.resetForm(form)
          console.log(res)
        },
        (err)=>console.log(err)
        ) 

    }else{
      console.log(form.value)
      await this.productService.createProduct(form.value).subscribe(
        (res)=>{
          this.getProducts()
          console.log(res)
        },
        (err)=>console.log(err)
        )
      }
  }

  async deleteProduct(product:Product){
    if (confirm('Are you sure you want to delete this product?')){
      await this.productService.deleteProduct(`${product._id}`).subscribe(
        (res)=>{
          this.getProducts()
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

  updateProduct(product:Product){
    this.productService.selectedProduct=product;
    this.productService.isEditMode = true;

    console.log(product)
  }
}
