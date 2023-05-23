const reviewHelpedBtnList = document.querySelectorAll(
  '.review-card-footer button'
)

const HELPFUL = '도움됨'
const NOT_HELPFUL = '도움이 돼요'

function toggleReviewHelpedBtn() {
  this.classList.toggle('btn-outlined')
  this.classList.toggle('btn-primary')

  const isHelped = this.classList.contains('btn-primary')
  const helpedText = this.nextElementSibling
  const reviewCardFooter = this.parentNode

  // 도움됨 클릭 여부
  if (isHelped) {
    this.innerHTML = HELPFUL

    const checkIcon = document.createElement('i')
    checkIcon.classList.add('ic-check')
    checkIcon.setAttribute('aria-hidden', true)
    this.prepend(checkIcon)
  } else {
    this.innerHTML = NOT_HELPFUL
  }

  // 도움되었습니다 텍스트 여부
  if (helpedText) {
    const countStrong = helpedText.querySelector('strong')
    const count = Number(countStrong.innerHTML.replaceAll(',', ''))

    let newCount = count
    if (isHelped) {
      newCount += 1
      countStrong.innerHTML = newCount.toLocaleString()
    } else {
      newCount -= 1
      if (newCount == 0) {
        reviewCardFooter.removeChild(helpedText)
      } else {
        countStrong.innerHTML = newCount.toLocaleString()
      }
    }
  } else {
    if (isHelped) {
      const newHelpedText = document.createElement('p')
      newHelpedText.innerHTML = '<strong>1</strong>명에게 도움이 되었습니다.'
      reviewCardFooter.appendChild(newHelpedText)
    }
  }
}

reviewHelpedBtnList.forEach((btn) =>
  btn.addEventListener('click', toggleReviewHelpedBtn)
)
