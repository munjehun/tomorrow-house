const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryDeleteBtn = gnbSearchHistory.querySelector(
  '.search-history-header button'
)
const gnbSearchHistoryList = gnbSearchHistory.querySelector(
  '.search-history-list'
)

function openGnbSearchHistory() {
  // 리스트가 없으면 is-active 생기지 않도록 먼저 작성
  if (!gnbSearchHistoryList.children.length) {
    return
  }
  gnbSearchHistory.classList.add('is-active')
  window.addEventListener('click', closeSearchHistory)
}

function closeSearchHistory(e) {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeSearchHistory)
  }
}

function deleteAllSearchHistory() {
  gnbSearchHistory.classList.remove('is-active')
  gnbSearchHistoryList.innerHTML = ''
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)
gnbSearchHistoryDeleteBtn.addEventListener('click', deleteAllSearchHistory)
