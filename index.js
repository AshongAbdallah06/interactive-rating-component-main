let submitButton = document.querySelector('.js-submit');
let number;

submitButton.addEventListener('click', () => {
    let card = document.querySelector('.card');

    if (number === undefined) {
        alert("Please select a rating");
    } else {
        setTimeout(() => {
            card.classList.add('thank-you-card')

            card.innerHTML = `
                <link rel="stylesheet" href="thank-you.css">
        
                <img src="images/illustration-thank-you.svg">
        
                <div class="out-of-five">You selected ${number} out of 5</div>
        
                <h3 class="thank-you"> Thank you!</h3>
        
                <p class="message">We appreciated you taking the time to give a rating. If you ever need more support, don't hesitate to <br> get in touch</p>
            `
        }, 1000);
    }


})

let ratingOne = document.querySelector('.one'); 
let ratingTwo = document.querySelector('.two'); 
let ratingThree = document.querySelector('.three'); 
let ratingFour = document.querySelector('.four'); 
let ratingFive = document.querySelector('.five'); 


ratingOne.addEventListener('click', () => {
    ratingOne.classList.add("is-selected");
    ratingTwo.classList.remove('is-selected');
    ratingThree.classList.remove('is-selected');
    ratingFour.classList.remove('is-selected');
    ratingFive.classList.remove('is-selected');

    number = document.querySelector('.one').innerHTML;
})

ratingTwo.addEventListener('click', () => {
    ratingOne.classList.remove("is-selected");
    ratingTwo.classList.add('is-selected');
    ratingThree.classList.remove('is-selected');
    ratingFour.classList.remove('is-selected');
    ratingFive.classList.remove('is-selected');

    number = document.querySelector('.two').innerHTML;
})

ratingThree.addEventListener('click', () => {
    ratingOne.classList.remove("is-selected");
    ratingTwo.classList.remove('is-selected');
    ratingThree.classList.add('is-selected');
    ratingFour.classList.remove('is-selected');
    ratingFive.classList.remove('is-selected');

    number = document.querySelector('.three').innerHTML;
})

ratingFour.addEventListener('click', () => {
    ratingOne.classList.remove("is-selected");
    ratingTwo.classList.remove('is-selected');
    ratingThree.classList.remove('is-selected');
    ratingFour.classList.add('is-selected');
    ratingFive.classList.remove('is-selected');

    number = document.querySelector('.four').innerHTML;
})

ratingFive.addEventListener('click', () => {
    ratingOne.classList.remove("is-selected");
    ratingTwo.classList.remove('is-selected');
    ratingThree.classList.remove('is-selected');
    ratingFour.classList.remove('is-selected');
    ratingFive.classList.add('is-selected');

    number = document.querySelector('.five').innerHTML;
})
