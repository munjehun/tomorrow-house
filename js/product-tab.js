const productTab = document.querySelector('.product-tab')
const productTabItemList = productTab.querySelectorAll('.product-tab-item')
const productTabBtnList = productTab.querySelectorAll('button')

const TOP_HEADER_DESKTOP = 80 + 50 + 54
const TOP_HEADER_MOBILE = 50 + 40 + 40

let currentActiveTab = productTab.querySelector('.is-active')

const productSpec = document.querySelector('[aria-labelledby="product-spec"]')

function activeProductTab() {
  const tabItem = this.parentNode

  // 동일 탭 반복 클릭했을때 에러 방지
  if (tabItem !== currentActiveTab) {
    currentActiveTab.classList.remove('is-active')
    tabItem.classList.add('is-active')
    currentActiveTab = tabItem
  }
}

function scrollToTabPanel() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby')
  const tabPanel = document.querySelector(`#${tabPanelId}`)

  const scrollAmount =
    tabPanel.getBoundingClientRect().top -
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE)

  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  })
}

productTabBtnList.forEach((btn) => {
  btn.addEventListener('click', activeProductTab)
  btn.addEventListener('click', scrollToTabPanel)
})

//사전정보 (각 tabPanel의 y축 위치) 를 만들어야 한다.
// 요소의 y축 위치 = window.scrollY + element.getBoundingClientRect().top
const productTabIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation',
]

const productTabPanelList = productTabIdList.map((panelId) =>
  document.querySelector(`#${panelId}`)
)

const productTabPanelPositionMap = {}

function detectTabPanelPosition() {
  productTabPanelList.map((panel) => {
    const id = panel.getAttribute('id')
    const position = window.scrollY + panel.getBoundingClientRect().top
    productTabPanelPositionMap[id] = position
  })
}

function updateActiveTabOnScroll() {
  const scrolledAmount =
    window.scrollY +
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP + 80 : TOP_HEADER_MOBILE + 8)

  let newActiveTab

  if (scrolledAmount >= productTabPanelPositionMap['product-recommendation']) {
    newActiveTab = productTabItemList[4]
  } else if (scrolledAmount >= productTabPanelPositionMap['product-shipment']) {
    newActiveTab = productTabItemList[3]
  } else if (scrolledAmount >= productTabPanelPositionMap['product-inquiry']) {
    newActiveTab = productTabItemList[2]
  } else if (scrolledAmount >= productTabPanelPositionMap['product-review']) {
    newActiveTab = productTabItemList[1]
  } else {
    newActiveTab = productTabItemList[0]
  }

  if (newActiveTab) {
    if (newActiveTab !== currentActiveTab) {
      currentActiveTab.classList.remove('is-active')
      newActiveTab.classList.add('is-active')
      currentActiveTab = newActiveTab
    }
  }
}

window.addEventListener('load', detectTabPanelPosition)
window.addEventListener('resize', detectTabPanelPosition)
window.addEventListener('scroll', updateActiveTabOnScroll)
