document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navigation--burger'), 0)

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target
        const $target = document.getElementById(target)

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }

  // Get all "dropdown" elements
  const $dropdowns = Array.prototype.slice.call(document.querySelectorAll('.navigation--item.has-dropdown .navigation--link'), 0)

  // Check if there are any dropdowns
  if ($dropdowns.length > 0) {
    // Add a click event on each of them
    $dropdowns.forEach(el => {
      el.addEventListener('click', () => {
        el.parentElement.classList.toggle('is-active')
      })
    })

    // close dropdowns on click somewhere else
    document.addEventListener('click', function (event) {
      $dropdowns.forEach(el => {
        var isClickInside = el.parentElement.contains(event.target)
        if (!isClickInside) {
          el.parentElement.classList.remove('is-active')
        }
      })
    })
  }

  // slide the navigation in and out
  let lastScrollTop = 0
  const navbar = document.querySelector('.navigation')
  document.addEventListener('scroll', function () {
    const st = window.pageYOffset || document.documentElement.scrollTop
    if (st === 0) {
      navbar.classList.add('is-top')
    }
    if (st > 200 && navbar.classList.contains('is-top')) {
      navbar.classList.add('is-invisible')
      navbar.classList.remove('is-top')
    }
    if (st > lastScrollTop) {
      navbar.classList.add('is-out')
    } else {
      navbar.classList.remove('is-invisible')
      navbar.classList.remove('is-out')
    }
    lastScrollTop = st <= 0 ? 0 : st
  })
})
