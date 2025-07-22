// Article.js
export class Article {
  constructor(title, content, writer) {
    this.title = title;
    this.content = content;
    this.writer = writer;
    this.likeCount = 0;
    this.createdAt = new Date().toISOString(); // 생성 시점 저장
  }

  like() {
    this.likeCount += 1;
  }
}
