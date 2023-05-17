const sidebarBtn = document.querySelector('.gnb-icon-button.is-menu')
const sidebar = document.querySelector('.sidebar')
const overlay = document.querySelector('.overlay')

function openSidebar() {
  sidebar.classList.add('is-active')
  overlay.classList.add('is-active')
}

sidebarBtn.addEventListener('click', openSidebar)

function closeSidebar() {
  sidebar.classList.remove('is-active')
  overlay.classList.remove('is-active')
}

overlay.addEventListener('click', closeSidebar)
