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