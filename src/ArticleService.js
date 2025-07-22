// ArticleService.js
const ARTICLE_BASE = "https://panda-market-api-crud.vercel.app/articles";

export async function getArticleList(page = 1, pageSize = 10, keyword = "") {
  try {
    const res = await fetch(`${ARTICLE_BASE}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`);
    if (!res.ok) throw new Error("서버 응답 실패");
    return await res.json();
  } catch (err) {
    console.error("getArticleList 실패:", err.message);
  }
}

export async function getArticle(id) {
  try {
    const res = await fetch(`${ARTICLE_BASE}/${id}`);
    if (!res.ok) throw new Error("게시글 없음");
    return await res.json();
  } catch (err) {
    console.error("getArticle 실패:", err.message);
  }
}

export async function createArticle(articleObj) {
  try {
    const res = await fetch(ARTICLE_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(articleObj),
    });
    if (!res.ok) throw new Error("생성 실패");
    return await res.json();
  } catch (err) {
    console.error("createArticle 실패:", err.message);
  }
}

export async function patchArticle(id, patchData) {
  try {
    const res = await fetch(`${ARTICLE_BASE}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patchData),
    });
    if (!res.ok) throw new Error("수정 실패");
    return await res.json();
  } catch (err) {
    console.error("patchArticle 실패:", err.message);
  }
}

export async function deleteArticle(id) {
  try {
    const res = await fetch(`${ARTICLE_BASE}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("삭제 실패");
    return await res.json();
  } catch (err) {
    console.error("deleteArticle 실패:", err.message);
  }
}