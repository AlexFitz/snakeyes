// JavaScript source code
var dice1 = 0;
var dice2 = 0;
var sum1 = 0;
var sum2 = 0;
var currentplayer = 1;
var numbertoplayto = prompt("What number do you ant to play to?", 100);
var skipturn = 0;
function diceroll(dice1, dice2) {
    dice1 = Math.round(Math.floor((Math.random() * 6.49) + 0.5));
    dice2 = Math.round(Math.floor((Math.random() * 6.49) + 0.5));
    confirm("Player "+currentplayer+" got a "+dice1+" and a "+dice2+".")
if (dice1 == 1) {
    dice1 = 0;
    dice2 = 0;
    skipturn = 1;
}
else if (dice2 == 1) {
    dice1 = 0;
    dice2 = 0;
    skipturn = 1;
}
else if (dice1 == dice2 == 1) {
if (currentplayer == 1) {
    sum1 = 0;
    dice1 = 0;
    dice2 = 0;
    confirm("Snake eyes!")
    skipturn = 1;
}
else if (currentplayer == 2) {
    sum2 = 0;
    dice1 = 0;
    dice2 = 0;
    confirm("Snake eyes!")
    skipturn = 1;
}
}
if (skipturn == 0) {
if (currentplayer == 1) {
    if (sum1<numbertoplayto) {
    sum1 = sum1 + dice1 + dice2;
    }
    if (sum1>numbertoplayto) {
    sum1 = sum1 - dice1 - dice2;
    }
}
else if (currentplayer == 2) {
    if (sum2<numbertoplayto) {
    sum2 = sum2 + dice1 + dice2;
    }
    if (sum2>numbertoplayto) {
    sum2 = sum2 - dice1 - dice2;
    }
}
if (sum2 == numbertoplayto) {
    confirm("Player 2 won!");
} else if (sum1 == numbertoplayto) {
    confirm("Player 1 won!");
}
    if (currentplayer == 1) {
        if (confirm("Player 1 has " + sum1 + " points. Do you want to roll again?")) {
            diceroll(dice1, dice2);
        } else {
            currentplayer = 2;
            diceroll(dice1, dice2);
        }
    }
    else if (currentplayer == 2) {
        if (confirm("Player 2 has " + sum2 + "points. Do you want to roll again?")) {
            diceroll(dice1, dice2);
        } else {
            currentplayer = 1;
            diceroll(dice1, dice2);
        }
    }
}
    else if (currentplayer == 1) {
            currentplayer = 2;
            diceroll(dice1, dice2);
        }
    }
    else if (currentplayer == 2) {
            currentplayer = 1;
            diceroll(dice1, dice2);
        }
    }    
}
