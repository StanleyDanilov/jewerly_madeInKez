// ========== Drop menu toggle ==========
document.querySelector('.drop-menu__btn-open').addEventListener('click', function() {
  document.querySelector('.drop-menu__content').classList.add('drop-menu__content--active')
})

document.querySelector('.drop-menu__btn-close').addEventListener('click', function() {
  document.querySelector('.drop-menu__content').classList.remove('drop-menu__content--active')
})


// ========== Cookie alert ==========
document.querySelector('.cookie-alert__btn').addEventListener('click', function() {
  document.querySelector('.cookie-alert').classList.add('submited-cookie')
})



// ========== Products Tabs ==========
document.querySelectorAll('.products__triggers__item').forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault()
    const id = e.target.getAttribute('href').replace('#', '')

    document.querySelectorAll('.products__triggers__item').forEach(
      (child) => child.classList.remove('products__triggers__item--active')
    )
    document.querySelectorAll('.products__content__item').forEach(
      (child) => child.classList.remove('products__content__item--active')
    )

    item.classList.add('products__triggers__item--active')
    document.getElementById(id).classList.add('products__content__item--active')
  })
})

document.querySelector('.products__triggers__item').click()



// ========== Smooth scroll ==========
function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}

const mainBtn = document.querySelector('.main__btn')
const productsCatalog = document.getElementById('products-catalog')

mainBtn.addEventListener('click', () => {
  scrollTo(productsCatalog)
})