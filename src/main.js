import { getProductList } from './ProductService.js';
import { Product } from './Product.js';
import { ElectronicProduct } from './ElectronicProduct.js';

async function main() {
  try {
    const data = await getProductList(1, 10, "");

    if (!data || !data.items || data.items.length === 0) {
      console.log("❗ 상품 데이터가 비어 있습니다.");
      return;
    }

    const products = data.items.map((item) => {
      const { name, description, price, tags, images, manufacturer } = item;

      if (tags.includes("전자제품")) {
        return new ElectronicProduct(name, description, price, tags, images, manufacturer);
      } else {
        return new Product(name, description, price, tags, images);
      }
    });

    console.log("✅ 생성된 상품 객체 리스트:");
    console.log(products);
  } catch (e) {
    console.log("🚫 에러 발생:", e.message);
  }
}

main(); // ← 반드시 호출해줘야 실행됨
