// ProductService.js
const BASE_URL = "https://panda-market-api-crud.vercel.app/products";

export async function getProductList(page = 1, pageSize = 10, keyword = "") {
  try {
    const response = await fetch(`${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`);
    if (!response.ok) throw new Error(`오류: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("getProductList 실패:", error.message);
  }
}

export async function getProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error("데이터 없음");
    return await response.json();
  } catch (e) {
    console.error("getProduct 실패:", e.message);
  }
}

export async function createProduct(productObj) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productObj),
    });
    if (!response.ok) throw new Error("생성 실패");
    return await response.json();
  } catch (e) {
    console.error("createProduct 실패:", e.message);
  }
}

export async function patchProduct(id, updatedData) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    return await response.json();
  } catch (e) {
    console.error("patchProduct 실패:", e.message);
  }
}

export async function deleteProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  } catch (e) {
    console.error("deleteProduct 실패:", e.message);
  }
}
