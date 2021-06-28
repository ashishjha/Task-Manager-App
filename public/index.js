const checkLocalStorage = (num) => {
  const mode = localStorage.getItem('theme')
  if (mode == 'dark' && num === 1) {
    document.getElementById('toggle-btn').setAttribute('checked', true)
    var sheets = document.getElementsByTagName('link')

    sheets[3].href = './darkTheme.css'
  }
  if (mode == 'dark' && num === 2) {
    var sheets = document.getElementsByTagName('link')

    sheets[3].href = './darkTheme.css'
  }
}

const toggler = () => {
  var checkBox = document.getElementById('toggle-btn')
  if (checkBox.checked == true) {
    localStorage.setItem('theme', 'dark')

    var sheets = document.getElementsByTagName('link')

    sheets[3].href = './darkTheme.css'
  } else {
    localStorage.setItem('theme', 'light')

    var sheets = document.getElementsByTagName('link')

    sheets[3].href = './main.css'
  }
}
