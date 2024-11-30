let overlayPreview = document.getElementById('overlay-preview')

overlayPreview.addEventListener('click', ()=>{
    overlayPreview.classList.add('overlay-preview')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

