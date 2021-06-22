import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-sproduct',
  templateUrl: './sproduct.component.html',
  styleUrls: ['./sproduct.component.css']
})
export class SproductComponent implements OnInit {
 product:any;
  constructor(private actr:ActivatedRoute,private productS:ProductsService) { }

  ngOnInit(): void {

   let id = this.actr.snapshot.params['id'];
   this.productS.getProduct(id).subscribe(data =>{
      this.product = data;
   })
  }

}
