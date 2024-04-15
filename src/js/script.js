let carrosel = document.querySelectorAll('.container-carrosel');

let index = 0;

function next(){
    carrosel[index].classList.remove('active');
    index = (index + 1) % carrosel.length;
    carrosel[index].classList.add('active');
}

function prev(){
    carrosel[index].classList.remove('active');
    index = (index - 1 + carrosel.length) % carrosel.length;
    carrosel[index].classList.add('active');
}

 setInterval(next, 6000);

//  Botão Topo

  const backToTopButton = document.querySelector('.back-to-top')

    const backToTop = () => {
    if (window.scrollY >= 100) {
    backToTopButton.classList.add('show')
    } else {
    backToTopButton.classList.remove('show')
    }
    }

    window.addEventListener('scroll', function () {
    backToTop()
    })