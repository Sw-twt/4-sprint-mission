# Panda Market Client

이 프로젝트는 Panda Market API와 통신하여 상품 및 게시글을 관리하는 웹 클라이언트입니다.

## 주요 기능

- 상품(Product) 및 전자제품(ElectronicProduct) 데이터 모델링
- 게시글(Article) 데이터 모델링
- API 서비스를 통한 데이터 연동 (조회, 생성, 수정, 삭제)

## 실행 방법

```bash
# 필요한 경우 Node.js 환경에서 실행합니다.
node src/main.js
```

## 프로젝트 구조

```
/
├── src/
│   ├── Article.js           # 게시글 클래스
│   ├── ArticleService.js    # 게시글 API 연동 서비스
│   ├── ElectronicProduct.js # 전자제품 클래스 (상품 상속)
│   ├── main.js              # 메인 실행 파일
│   ├── Product.js           # 상품 클래스
│   └── ProductService.js    # 상품 API 연동 서비스
└── package.json
```
