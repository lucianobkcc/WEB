document.addEventListener('DOMContentLoaded', function() {
    const bitcoinContainer = document.querySelector('.bitcoin-rain');
    const numBitcoins = 20;

    for (let i = 0; i < numBitcoins; i++) {
        const bitcoin = document.createElement('div');
        bitcoin.classList.add('bitcoin');
        bitcoin.style.left = Math.random() * 100 + 'vw';
        bitcoin.style.animationDuration = Math.random() * 3 + 2 + 's';
        bitcoin.style.animationDelay = Math.random
