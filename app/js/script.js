const btnHamburger = document.querySelector('#btnHamburger');

btnHmaburher.addEventListener('click', function() {
    console.log('open hamburger');
    
    if(btnHamburger.classList.contains('open')){
        btnHamburger.classList.remove('open');
    }
    else {
        btnHamburger.classList.add('open');
    }
})