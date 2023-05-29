const sectionHeaderIconBtn = document.querySelector(
  '.product-shipment .product-section-header.sm-only .icon-button'
)

function showFullSection() {
  const section = this.parentNode.parentNode //부모의 부모태그
  section.classList.add('is-open')
}

sectionHeaderIconBtn.addEventListener('click', showFullSection)
