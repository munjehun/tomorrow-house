# 내일의 집

### 1. GNB

- 로그인을 하지 않은 경우

```html
<div class="button-group">
  <a href="/" class="gnb-icon-button" aria-label="장바구니 페이지로 이동">
    <i class="ic-cart"></i>
    <strong class="badge">12</strong>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="/" class="login">로그인</a>
    <a href="/">로그아웃</a>
  </div>
</div>
```

- 로그인을 했을 경우

```html
<div class="button-group">
  <a
    href="/"
    class="sm-hidden gnb-icon-button"
    aria-label="스크랩북 페이지로 이동"
  >
    <i class="ic-bookmark"></i>
  </a>

  <a
    href="/"
    class="sm-hidden gnb-icon-button"
    aria-label="내 소식 페이지로 이동"
  >
    <i class="ic-bell"></i>
  </a>

  <a href="/" class="gnb-icon-button" aria-label="장바구니 페이지로 이동">
    <i class="ic-cart"></i>
    <strong class="badge">12</strong>
  </a>

  <button
    type="button"
    class="lg-hidden gnb-icon-button is-search"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>
  <button
    type="button"
    class="gnb-avatar-button sm-hidden"
    aria-label="마이 메뉴 열기 버튼"
  >
    <div class="avatar-32">
      <img src="./assets/images/img-user-01.jpg" alt="사딸라 아저씨" />
    </div>
  </button>
</div>
```

### 2. Sidebar

- 로그인을 하지 않은 경우

```html
<div class="sidebar-auth">
  <a href="/" class="btn-outlined btn-40">로그인</a>
  <a href="/" class="btn-primary btn-40">회원가입</a>
</div>
```

- 로그인을 했을 경우

```html
<div class="sidebar-user">
  <a href="/">
    <div class="avatar-24">
      <img src="./assets/images/img-user-01.jpg" alt="사딸라 아저씨" />
    </div>
    <strong class="username"
      >사딸라딸라딸라라딸라라딸라라딸라라딸라라딸라</strong
    >
  </a>
</div>
```
