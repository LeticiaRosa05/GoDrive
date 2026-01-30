const imagens = document.querySelectorAll('.item'); /* zoom na lista de características da empresa, pg index; serviços na pg serviços */
const carrosE = document.querySelectorAll('.carrosEscala'); /*  carros na pg Nossa frota */

imagens.forEach(img => {
    img.style.transition = "transform 0.2s ease";

    img.addEventListener('mouseover', () => {
        img.style.transform = "scale(1.2)";
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = "scale(1)";
    });
});

carrosE.forEach(carros => {
    carros.style.transition = "transform 0.3s ease";

    carros.addEventListener('mouseover', () => {
        carros.style.transform = "scale(1.15)";
    });

    carros.addEventListener('mouseout', () => {
        carros.style.transform = "scale(1)";
    });
});

document.getElementById('buttonContato').onclick = function() {
    document.getElementById('modalContato').style.display = 'flex';
};
document.getElementById('closeModal').onclick = function() {
    document.getElementById('modalContato').style.display = 'none';
};

window.onclick = function(event) {  /* fecha o modal se clicar fora dele */
    var modal = document.getElementById('modalContato');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
