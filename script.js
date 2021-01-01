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


// ========== Smoothly transition ==========

const productsCatalog = document.getElementById('products-catalog')
const goToCatalog = document.querySelector('.main-btn')

function handleButtonClick() {
   productsCatalog.scrollIntoView({
     behavior: 'smooth'
    })
}

goToCatalog.addEventListener('click', handleButtonClick)


// different type of smooth

// const productCatalog = document.querySelector()

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()
    
//     const blockID = anchor.getAttribute('href').substr(1)
    
//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth'
//     })
//   })
// }