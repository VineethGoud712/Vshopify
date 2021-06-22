import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   allProducts:any;
   CategoryList:any;
   categoryD:any;
   title:any;
  constructor(private productS:ProductsService,private  actr:ActivatedRoute) { }

  ngOnInit(): void {

    this.productS.getallProducts().subscribe(data =>{
      console.log(data);
      this.allProducts = data;
    });
    //id
       this.actr.snapshot.params['category'];
       this.productS.getallProductss().subscribe(data=>{
        console.log(data);
        this.title = data;
      })
     
    //allCategories
      this.productS.getallCategories().subscribe(data =>{
        //console.log(data);
        this.CategoryList = data;
      });
      
      this.productS.getCategory().subscribe(data=>{
          console.log(data);
          this.categoryD= data;
      });
  }
  
}
