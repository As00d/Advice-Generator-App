const button = document.querySelector('button');
const adviceId = document.querySelector('span');
const advice = document.querySelector('h2');
const container = document.querySelector('.adviceContainer');

const getAdvice = function () {
    fetch('https://api.adviceslip.com/advice').then(function (response) {
        if (!response.ok) {
            throw new Error('Error reaching out to api');
        }
        return response.json();
    }).then(function (data) {
        adviceId.textContent = data.slip.id;
        advice.textContent = data.slip.advice;
    }).catch(function (error) {
        console.error(error);
    }).finally(function () {
        container.style.opacity = 100;
    })
}
window.onload = getAdvice;


button.addEventListener('click', function () {
    getAdvice();
})
