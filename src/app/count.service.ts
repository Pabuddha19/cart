import { Injectable } from '@angular/core';
import { ProductList } from './data';
import { interfaceOfProductList } from './data-products';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  data: interfaceOfProductList[] = ProductList;

  num: number = 0;

  up() {
    ;
  }

  down() {
    ;
  }


  constructor() {}
}
