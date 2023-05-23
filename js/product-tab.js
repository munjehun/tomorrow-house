const productTab = document.querySelector('.product-tab')
const productTabItemList = productTab.querySelectorAll('.product-tab-item')
const productTabBtnList = productTab.querySelectorAll('button')

let currentActiveTab = productTab.querySelector('.is-active')

function activeProductTab() {
  const tabItem = this.parentNode

  // 동일 탭 반복 클릭했을때 에러 방지
  if (tabItem !== currentActiveTab) {
    currentActiveTab.classList.remove('is-active')
    tabItem.classList.add('is-active')
    currentActiveTab = tabItem
  }
}

productTabBtnList.forEach((btn) =>
  btn.addEventListener('click', activeProductTab)
)
