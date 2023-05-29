const drawerMenuBtList = document.querySelectorAll(
  '.sidebar-nav .drawer-menu-button'
)

function toggleDrawerMenu() {
  // drawerMenuBtn의 부모태그 drawer-menu 한테 is-open 토글링
  const drawerMenu = this.parentNode
  drawerMenu.classList.toggle('is-open')
  drawerMenu.classList.toggle('is-active')
}

Array.from(drawerMenuBtList).map((menu) => {
  menu.addEventListener('click', toggleDrawerMenu)
})
