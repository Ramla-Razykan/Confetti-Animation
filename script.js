var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

let btn = document.querySelector('.btn');
let confetti1 = document.querySelector('#my-canvas');
btn.onclick = function(){
    confetti1.classList.add('active');
}