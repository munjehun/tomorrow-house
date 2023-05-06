const productCarousel = tns({
  container: '.product-carousel .slider-list', //캐로셀로 사용할 태그
  items: 1, //한번에 보여줄 아이템 갯수
  slideBy: 'page', //전환 방식
  controls: false, //prev, next 버튼 자동 추가
  navContainer: '.product-carousel .thumbnail-list', //nav로 사용할 칸 설정
  navAsThumbnails: true, //썸네일을 네비게이션으로 사용할 지
  arrowKeys: true, //방향키로 전환 가능한지
  autoplay: true, //자동 전환 여부
  autoplayTimeout: 3000, //자동 전환 시간
  autoplayHoverPause: true, //호버하면 자동 전환 정지
  autoplayButtonOutput: false, //자동재생 버튼 여부
  loop: true, //무한 루프 여부
  mouseDrag: true, //마우스로 드래그 전환 여부
  preventScrollOnTouch: true, //터치로 전환할 때,콘솔 에러 메시지 안나오도록
})

const userGallery = tns({
  container: '.user-gallery .slider-list',
  navContainer: '.user-gallery .thumbnail-list',
  navAsThumbnails: true,
  controls: false,
  controlsContainer: '.user-gallery-controls', //이전 다음 버튼 연결
  items: 1,
  gutter: 4, //다음 슬라이드와의 간격
  edgePadding: 16, //양 옆의 슬라이드가 삐져나오는 정도(px)
  loop: false,
  slideBy: 'page',
  mouseDrag: true,
  preventScrollOnTouch: true,
  responsive: {
    768: {
      controls: true,
      gutter: 6,
      edgePadding: 75,
    },
  },
})
