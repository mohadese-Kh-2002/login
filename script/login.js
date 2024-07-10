const $=document
const formLogin=$.querySelector('.login__form')
const inputFormLogin=$.querySelectorAll('.login__input')

formLogin.addEventListener('submit',(event)=>{
    event.preventDefault()
    event.target.elements.username.value=''
    event.target.elements.userPassword.value=''
})

inputFormLogin.forEach(input=>{
    input.addEventListener('focus',event=>{
        event.target.style.cssText='min-width:80%;border-color:#0eb445;'
    })
    input.addEventListener('blur',event=>{
        event.target.style.cssText='min-width:50%;border-color:#3d78bb;'
    })
})