/**
* randomInt:
* Returns a random positive integer from min to max
* @Parameters: min - the smallest possible number, max - largest possible number
* @Return: Int
* @Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
function randomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min
}


const $dice = document.querySelector(".dominoes");

const dice = [];

for(let j = 0 ; j < 100 ; j++)
  {
    let number = randomInt(0 , 6);
    dice.push(`<div class='domino'>`)
    dice.push(`<div class = "dots dots-${number}">`);
    
    for(let i = 0 ; i < number ; i++){
      
      dice.push(`<div class = "dot"></div>`);
    }
     dice.push(`</div>`);
   
 number = randomInt(0 , 6);
    
    dice.push(`<div class = "dots dots-${number}">`);
    
    for(let i = 0 ; i < number ; i++){
      
      dice.push(`<div class = "dot"></div>`);
    }
     dice.push(`</div>`);
      
      dice.push(`</div>`);
   
   
  }

$dice.innerHTML = dice.join(" ");

