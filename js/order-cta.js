const orderCta = document.querySelector('.order-cta')
// 구조분해 할당
const [orderCtaBookmarkBtn, orderCtaBuyBtn] = orderCta.children
const orderFormModal = document.querySelector('.order-form-modal')
const orderOverlay = document.querySelector('.overlay')

function openOrderFormModal() {
  orderFormModal.classList.add('is-open')
  orderOverlay.classList.add('is-active')
}

orderCtaBuyBtn.addEventListener('click', openOrderFormModal)

function closeOrderFormModal() {
  orderFormModal.classList.remove('is-open')
  orderOverlay.classList.remove('is-active')
}

orderOverlay.addEventListener('click', closeOrderFormModal)

function toggleOrderCtaBookmark() {
  const [icon, countSpan] = this.children
  let count = parseInt(countSpan.innerHTML.replaceAll(',', ''))

  this.classList.contains('is-active') ? (count -= 1) : (count += 1)

  countSpan.innerHTML = count.toLocaleString()
  countSpan.setAttribute('aria-label', `북마크 ${count.toLocaleString()}회`)

  icon.classList.toggle('ic-bookmark')
  icon.classList.toggle('ic-bookmark-filled')
  this.classList.toggle('is-active')
}

orderCtaBookmarkBtn.addEventListener('click', toggleOrderCtaBookmark)
