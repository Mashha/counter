let count = 0

let btns = document.querySelectorAll('.btn')
let value = document.getElementById('value')

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    let btnClick = e.currentTarget.classList
    if (btnClick.contains('decrease')) {
      count--
    } else if (btnClick.contains('increase')) {
      count++
    } else {
      count = 0
    }
    value.textContent = count
    if (count < 0) {
      value.style.color = 'red'
    }
    if (count > 0) {
      value.style.color = 'green'
    }
    if (count === 0) {
      value.style.color = 'black'
    }
  })
})
