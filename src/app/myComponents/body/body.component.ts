// import { outputAst } from '@angular/compiler';
import { Component } from '@angular/core';
import { CountService } from 'src/app/count.service';
import { ProductList } from 'src/app/data';
import { interfaceOfProductList } from 'src/app/data-products';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  dataList: any;
  constructor(public count: CountService) {
    this.dataList = ProductList;
  }

  // totalQuantity: number = this.dataList.reduce((acc: any, val) => {
  //   return acc + val?.quantity;
  // }, 0);

  get totalQuantity() {
    return this.dataList.reduce((acc: any, val: any) => {
      return acc + val?.quantity;
    }, 0);
  }

  get totalPrice() {
    return this.dataList.reduce((acc: any, val: any) => {
      return acc + val?.price * val?.quantity;
    }, 0);
  }

  incrememtCount(value: any) {
    // this.totalQuantity++;

    this.dataList[value].quantity++;

    // console.log(this.dataList);
    // value.quantity++;
    // this.totalPrice += value.price;
  }

  decrementCount(value: any) {
    if (value.quantity == 1) {
      this.remove(value);
    } else {
      // this.totalPrice = this.totalPrice - value.price;
      value.quantity--;
      // this.totalQuantity--;
    }
  }

  remove(value: any) {
    // this.totalPrice -= value.price * value.quantity;
    // this.totalQuantity -= value.quantity;
    this.dataList = this.dataList.filter((a: any) => a.id != value.id);
    // console.log(value);
  }

  ngOnInit(): void {}
}
