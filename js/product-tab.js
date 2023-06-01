const productTab = document.querySelector('.product-tab')
const productTabItemList = productTab.querySelectorAll('.product-tab-item')
const productTabBtnList = productTab.querySelectorAll('button')

const TOP_HEADER_DESKTOP = 80 + 50 + 54
const TOP_HEADER_MOBILE = 50 + 40 + 40

let currentActiveTab = productTab.querySelector('.is-active')

let disableUpdating = false

// 탭 클릭시 is-active 활성화
function toggleActiveTab() {
  const tabItem = this.parentNode

  if (currentActiveTab !== tabItem) {
    disableUpdating = true
    currentActiveTab.classList.remove('is-active')
    tabItem.classList.add('is-active')
    currentActiveTab = tabItem
    setTimeout(function () {
      disableUpdating = false
    }, 500)
  }
}

// 탭 클릭시 스크롤 자동이동
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
  btn.addEventListener('click', toggleActiveTab)
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

// 패널 위치 탐지
function detectTabPanelPosition() {
  productTabPanelList.map((panel) => {
    const id = panel.getAttribute('id')
    const position = window.scrollY + panel.getBoundingClientRect().top
    productTabPanelPositionMap[id] = position
  })

  updateActiveTabOnScroll()
}

// 스크롤에 따른 Active Tab
function updateActiveTabOnScroll() {
  if (disableUpdating) {
    return
  }

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

  // 스크롤 끝까지 한 경우 : newActiveTab = productTabItemList[4]
  // window.scrollY + window.innerHeight ==  document.body.offsetHeight

  if (
    window.scrollY + window.innerHeight + (window.innerWidth < 1200 ? 56 : 2) >=
    document.body.offsetHeight
  ) {
    newActiveTab = productTabItemList[4]
  }

  if (newActiveTab) {
    if (newActiveTab !== currentActiveTab) {
      if (currentActiveTab) {
        currentActiveTab.classList.remove('is-active')
      }
      newActiveTab.classList.add('is-active')
      currentActiveTab = newActiveTab
    }
  }
}

window.addEventListener('load', detectTabPanelPosition)
window.addEventListener('resize', _.throttle(detectTabPanelPosition, 1000))
window.addEventListener('scroll', _.throttle(updateActiveTabOnScroll, 200), {
  passive: true,
})
