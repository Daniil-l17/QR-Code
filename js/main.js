

const form = document.querySelector('#form')
const input = document.querySelector('#input')
const api = 'https://api.qrserver.com/v1/create-qr-code/?size=160x160&data='

  const qrCard = document.querySelector('.card-qr')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    qrCard.innerHTML = ''
    if(input.value.length !== 0){
      const inpApi = api + input.value
      const img = `<img src=${inpApi} alt="qrCode">`
      qrCard.classList.add('open')
      qrCard.insertAdjacentHTML('beforeend',img)
    }
  })

