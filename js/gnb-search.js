const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')

function openGnbSearchHistory() {
  gnbSearchHistory.classList.add('is-active')
  window.addEventListener('click', closeSearchHistory)
}

function closeSearchHistory(e) {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeSearchHistory)
  }
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)
