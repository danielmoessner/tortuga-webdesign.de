document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form form')
  if (form !== null) {
    form.addEventListener('submit', function (event) {
      event.preventDefault()
      form.parentElement.querySelector('.contact-form--success-message').style.display = 'none'
      form.parentElement.querySelector('.contact-form--error-message').style.display = 'none'
      const formData = new FormData(event.target)
      const data = {}
      formData.forEach(function (value, key) {
        data[key] = value
      })
      fetch(form.action,
        {
          method: 'post',
          mode: 'cors',
          body: formData
        })
        .then(response => response.json())
        .then(function (response) {
          if (response.is_form_valid) {
            form.parentElement.querySelector('.contact-form--success-message').style.display = 'block'
            form.style.display = 'none'
          } else {
            form.parentElement.querySelector('.contact-form--error-message').style.display = 'block'
          }
        })
        .catch(function (error) {
          form.parentElement.querySelector('.contact-form--error-message').style.display = 'block'
        })
    })
  }
})
