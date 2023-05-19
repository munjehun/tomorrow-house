const myMenu = document.querySelector('.my-menu')
const [myMenuBtn, myMenuModal] = myMenu.children

function toggleMyMenu() {
  myMenu.classList.toggle('is-active')

  // 최적화를 위해 토글이 됐을때만 closeMyMenuOnClickingOutside() 활성화
  if (myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closeMyMenuOnClickingOutside)
  }
}

function closeMyMenuOnClickingOutside(e) {
  console.log('window!!!!!')

  // myMenu의 자손중에 e.target이 포함되는지 판단
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')

    // 최적화를 위해 토글이 돼지않으면 closeMyMenuOnClickingOutside() 비활성화
    window.removeEventListener('click', closeMyMenuOnClickingOutside)
  }
}

myMenuBtn.addEventListener('click', toggleMyMenu)
