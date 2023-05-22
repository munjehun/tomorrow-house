const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const deleteAllBtn = gnbSearchHistory.querySelector(
  '.search-history-header button'
)
const gnbSearchHistoryList = gnbSearchHistory.querySelector(
  '.search-history-list'
)
const deleteBtnList = gnbSearchHistoryList.querySelectorAll('.delete-button')

function openGnbSearchHistory() {
  // 리스트가 없으면 is-active 생기지 않도록 먼저 작성
  if (!gnbSearchHistoryList.children.length) {
    return
  }
  gnbSearchHistory.classList.add('is-active')
  window.addEventListener('click', closeSearchHistoryOnClickingOutside)
}

function closeSearchHistory() {
  gnbSearchHistory.classList.remove('is-active')
  window.removeEventListener('click', closeSearchHistoryOnClickingOutside)
}

function closeSearchHistoryOnClickingOutside(e) {
  if (!gnbSearch.contains(e.target)) {
    closeSearchHistory()
  }
}

function deleteAllSearchHistory() {
  closeSearchHistory()
  gnbSearchHistoryList.innerHTML = ''
}

function deleteSearchHistoryItem(e) {
  e.stopPropagation() //이벤트 전파 방지 ( closeSearchHistoryOnClickingOutside() 실행 방지 )
  const itemToDelete = this.parentNode
  gnbSearchHistoryList.removeChild(itemToDelete)

  // 검색기록 1개도 없다면 'is-active' 삭제
  if (!gnbSearchHistoryList.children.length) {
    closeSearchHistory()
  }
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)
deleteAllBtn.addEventListener('click', deleteAllSearchHistory)
deleteBtnList.forEach((btn) =>
  btn.addEventListener('click', deleteSearchHistoryItem)
)
