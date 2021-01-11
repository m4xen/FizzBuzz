console.log("Welcome to my fizz buzz game");
console.log("geme version 1");

function game(){
console.log("game is up and runnign(if it works)");    

    for (var i=1; i <101; i ++){
        if (i % 15 == 0){
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0){
            console.log("Fizz");
        }
        else if (i % 5 == 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}