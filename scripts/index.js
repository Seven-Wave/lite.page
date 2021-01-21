const list = document.querySelectorAll('.item')
const btn = document.getElementById('save-btn')
const alert = document.getElementById('alert')
const close = document.getElementById('close')

let temp = 0
list[temp].classList.add('active')


close.addEventListener('click', () => {
    alert.style.opacity = '0'
    alert.style.zIndex = '-1'
})

btn.addEventListener('click', (e) => {
    alert.style.opacity = '1'
    alert.style.zIndex = '1'

    setTimeout(()=>{
        alert.style.opacity = '0'
        alert.style.zIndex = '-1'
    }, 5000)
    
})


for (let i = 0; i < list.length; i++) {

    list[i].addEventListener('click', (e) => {
        e.preventDefault()
        list[temp].classList.remove('active')
        temp = i
        list[i].classList.add('active')
    })
}