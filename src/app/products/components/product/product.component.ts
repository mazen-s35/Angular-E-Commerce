import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from '../../modle/prodecut';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() data!:Products;
  @Output() item = new EventEmitter();
  addButton: boolean = false;
  amount:number = 0;
  constructor() {}

  ngOnInit(): void {}

  add(event: any) {
    this.item.emit({item:this.data, quantity: this.amount});
  }
}
