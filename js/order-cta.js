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

  this.classList.contains('is-active')
    ? (icon.classList.replace('ic-bookmark-filled', 'ic-bookmark'),
      (count -= 1))
    : (icon.classList.replace('ic-bookmark', 'ic-bookmark-filled'),
      (count += 1))

  countSpan.innerHTML = count.toLocaleString()

  this.classList.toggle('is-active')
}

orderCtaBookmarkBtn.addEventListener('click', toggleOrderCtaBookmark)
