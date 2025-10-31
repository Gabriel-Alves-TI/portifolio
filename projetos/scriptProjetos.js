document.addEventListener('click', (e) => {
    const targetEl = e.target;

    if (targetEl.classList.contains('disabled')){
        alert('Este projeto ainda não está disponível. Clone o Repositório e teste na sua máquina!');
    }
})
