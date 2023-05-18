const orderCta = document.querySelector('.order-cta')
// 구조분해 할당
const [orderCtaBookmarkBtn, orderCtaBuyBtn] = orderCta.children
const orderFormModal = document.querySelector('.order-form-modal')
const orderOverlay = document.querySelector('.overlay')

console.log(orderCtaBookmarkBtn)
console.log(orderCtaBuyBtn)

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
