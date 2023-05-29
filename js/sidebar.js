const sidebarBtn = document.querySelector('.gnb-icon-button.is-menu')
const sidebar = document.querySelector('.sidebar')
//overlay로 선언하면 다른 js파일에서 못 쓰므로 해당 기능에 맞게 변수명 선언
const sidebarOverlay = document.querySelector('.overlay')

function openSidebar() {
  sidebar.classList.add('is-active')
  sidebarOverlay.classList.add('is-active')
}

sidebarBtn.addEventListener('click', openSidebar)

function closeSidebar() {
  sidebar.classList.remove('is-active')
  sidebarOverlay.classList.remove('is-active')
}

sidebarOverlay.addEventListener('click', closeSidebar)
