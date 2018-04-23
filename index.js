var readlineSync = require('readline-sync');

var userName = readlineSync.question('Do you want to play BlackJack? yes/no \n');

if (userName=="yes"){
    var sum = 0;
    var num =Math.floor((Math.random())*10);
    if (num==0){num=1}
    sum+=num;
    while(sum<22){

        if(sum==21){
            console.log("CONGRATULATIONS!!!! You Won!")
            return;
        }

        console.log("You got: "+num);
        console.log("Your sum total is: "+sum);
        console.log("");
        var answer = readlineSync.question("Would you like to get another card? Yes/no \n");
        if (answer=="no"){
            console.log("Thank you for playing, you score is "+ sum);
            return;
        } else {
            num =Math.floor((Math.random())*10);
            if (num==0){num=1}
            sum+=num;
        }
    }
    console.log("You got: "+num);
    console.log("OOHHH you lost! your score is "+ sum);
} else if(userName=="no"){
    console.log("Chicken!!!!!");
} else {
    console.log("It's only yes or no chicken");
}
