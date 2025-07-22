// ElectronicProduct.js
import { Product } from "./Product.js";

export class ElectronicProduct extends Product {
  constructor(name, description, price, tags, images, manufacturer) {
    super(name, description, price, tags, images); // 부모 생성자 호출
    this.manufacturer = manufacturer; // 제조사
  }
}
