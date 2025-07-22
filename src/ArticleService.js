// ArticleService.js
const ARTICLE_BASE = "https://panda-market-api-crud.vercel.app/articles";

export function getArticleList(page = 1, pageSize = 10, keyword = "") {
  return fetch(`${ARTICLE_BASE}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`)
    .then(res => {
      if (!res.ok) throw new Error("서버 응답 실패");
      return res.json();
    })
    .catch(err => console.error("getArticleList 실패:", err.message));
}

export function getArticle(id) {
  return fetch(`${ARTICLE_BASE}/${id}`)
    .then(res => {
      if (!res.ok) throw new Error("게시글 없음");
      return res.json();
    })
    .catch(err => console.error("getArticle 실패:", err.message));
}

export function createArticle(articleObj) {
  return fetch(ARTICLE_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(articleObj),
  })
    .then(res => res.json())
    .catch(err => console.error("createArticle 실패:", err.message));
}

export function patchArticle(id, patchData) {
  return fetch(`${ARTICLE_BASE}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patchData),
  })
    .then(res => res.json())
    .catch(err => console.error("patchArticle 실패:", err.message));
}

export function deleteArticle(id) {
  return fetch(`${ARTICLE_BASE}/${id}`, {
    method: "DELETE",
  })
    .then(res => res.json())
    .catch(err => console.error("deleteArticle 실패:", err.message));
}
