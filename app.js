function addTotalSum (input) {
    let sum;
  console.log(input)
  sum = input.reduce((accumelator, currentvalue) => accumelator + currentvalue, 0)
  return sum;
}

console.log(addTotalSum([1, 3, 10]))


var letters = []
var word = "freeCodeCamp"
var rword = "";


for (var i = 0; i < word.length; i++){
    letters.push(word[i])
    console.log(letters)
}

for (var i = 0; i < word.length; i++){
   rword += letters.pop()
   console.log(rword)
}

if (rword === word) {
    console.log(rword)
    console.log(word)
    console.log(`${word} is a palindrome`)
}else{
    console.log(`${word} is not a palindrome`)
    console.log(rword)
    console.log(word)
}
