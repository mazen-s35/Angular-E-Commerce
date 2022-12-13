import { PorductService } from './../../service/porduct.service';
import { Component, OnInit } from '@angular/core';
import { Products } from '../../modle/prodecut';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  constructor(private service: PorductService) {}

  products: Products[] = [];
  categories: string[] = [];
  loading: boolean = false;
  cartProducts: any[] = [];

  ngOnInit(): void {
    this.getProduct();
    this.getCategories();
  }

  getProduct() {
    this.loading = true;
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false;
        console.log(res);
      },
      (error) => {
        this.loading = false;
        alert(error.message);
      }
    );
  }

  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
        this.loading = false;
        console.log(res);
      },
      (error) => {
        this.loading = false;
        alert(error.message);
      }
    );
  }

  filterCategories(event: any) {
    let value = event.target.value;
    if (value == 'all') {
      this.getProduct();
    } else {
      this.getProductCategories(value);
    }
  }
  getProductCategories(keyWord: string) {
    this.loading = true;
    this.service.getProductByCategories(keyWord).subscribe((res: any) => {
      this.products = res;
      this.loading = false;
    });
  }

  addToCart(event:any) {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exit = this.cartProducts.find(item => item.item.id == event.item.id);
      if(exit) {
        alert("The Product is Already in Your Cart")
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
}
