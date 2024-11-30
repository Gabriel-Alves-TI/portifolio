const btnProjetos01 = document.getElementById('btn-box02');
const btnProjetos02 = document.getElementById('btn-box03')

document.addEventListener('click', (e) => {
    const targetEl = e.target;

    if (targetEl.classList.contains('disabled')){
        alert('Este projeto ainda não está disponível. Clone o Repositório e teste na sua máquina!');
    }
})
