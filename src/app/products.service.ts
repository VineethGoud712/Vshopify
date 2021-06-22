import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getallCategories(){
     return this.http.get('https://fakestoreapi.com/products/categories');
  }
  getCategory(){
    return this.http.get('https://fakestoreapi.com/products/category');
  }
  getallProducts(){
    return this.http.get("https://fakestoreapi.com/products");
  }
  getallProductss(){
    return this.http.get("https://fakestoreapi.com/products");
  }
  getProduct(id:number){
   return this.http.get("https://fakestoreapi.com/products/"+id);
  }
}
