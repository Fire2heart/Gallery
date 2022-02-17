'use strict';

const li = document.querySelectorAll('li');
const mainImage = document.querySelector('#largeImg');

const showImg = (event) => {
    const imageToChange = event.target.parentNode;
    mainImage.src = imageToChange.href;
}

const div = document.querySelector('#largeImg');
console.log(div.srс);

li.forEach(element => {
    element.addEventListener('click', showImg);
})

const img = document.querySelectorAll('img');

const cancel = (event) => {
    event.preventDefault();
}

img.forEach(element => {
    element.addEventListener('click', cancel);
})