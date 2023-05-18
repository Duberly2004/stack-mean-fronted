import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../../Models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  URL_API = 'http://localhost:3000/api/products';
  selectedProduct: Product = new Product("","",0,"","","","");
  products : Product[] = [];
  isEditMode: boolean = false;
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(this.URL_API);
  }  
  createProduct(product: Product){
    return this.http.post(this.URL_API, product)
  }
  deleteProduct(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
  updateProduct(product: Product){
    return this.http.put(`${this.URL_API}/${product._id}`,product)
  }
}
