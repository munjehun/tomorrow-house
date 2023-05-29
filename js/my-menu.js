const myMenu = document.querySelector('.my-menu')
const [myMenuBtn, myMenuModal] = myMenu.children

function toggleMyMenu() {
  // 최적화를 위해 토글이 될 때만 closeMyMenuOnClickingOutside() 활성화
  if (!myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closeMyMenuOnClickingOutside)
  }

  myMenu.classList.toggle('is-active')
}

function closeMyMenuOnClickingOutside(e) {
  // myMenu의 자손중에 e.target이 포함되는지 판단
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')

    // 최적화를 위해 토글이 되지않으면 closeMyMenuOnClickingOutside() 비활성화
    window.removeEventListener('click', closeMyMenuOnClickingOutside)
  }
}

myMenuBtn.addEventListener('click', toggleMyMenu)
