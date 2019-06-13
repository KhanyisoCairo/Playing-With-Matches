var randomNum =document.querySelector(".Number");
var randomNum1 =document.querySelector(".Number1");
var randomNum2 = document.querySelector(".Number2");

        function getRandomNumbers(randomMin ,randomMax){

            return Math.floor( Math.random() * (randomMax - randomMin) + randomMin);
            console.log(1,9)
        }
        randomNum.innerHTML =getRandomNumbers(1,9);
        randomNum1.innerHTML = getRandomNumbers(1,9);
        randomNum2.innerHTML =getRandomNumbers(1,9);
