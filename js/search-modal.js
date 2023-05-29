const searchModal = document.querySelector('.search-modal.lg-hidden')
const searchBtn = document.querySelector('.gnb-icon-button.is-search')
const searchModalCloseBtn = searchModal.querySelector('.btn-ghost.btn-40')
//overlay로 선언하면 다른 js파일에서 못 쓰므로 해당 기능에 맞게 변수명 선언
const searchOverlay = document.querySelector('.overlay')

function openSearchModal() {
  searchModal.classList.add('is-active')
  searchOverlay.classList.add('is-active')
}

searchBtn.addEventListener('click', openSearchModal)

function closeSearchModal() {
  searchModal.classList.remove('is-active')
  searchOverlay.classList.remove('is-active')
}

searchModalCloseBtn.addEventListener('click', closeSearchModal)
