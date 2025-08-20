// Product.js
export class Product {
  constructor(name, description, price, tags, images) {
    this.name = name; // 상품명
    this.description = description; // 상품 설명
    this.price = price; // 가격
    this.tags = tags; // ["#전자제품", "#중고"]
    this.images = images; // 이미지 url 배열
    this.favoriteCount = 0; // 찜하기 수 (초기값 0)
  }

  favorite() {
    this.favoriteCount += 1; // 찜하기 수 1 증가
  }
}
