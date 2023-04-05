"use strict";
let tbl = document.querySelector('#tbl');
let general = document.querySelector('#general')
let ball = document.querySelector('#ball');
let bar = document.querySelector('#bar');
let barX = 0;
let ballX = 0;
let ballY = 0;
let ballMx = 5;
let ballMy = 5;
let count = 0;

let data = prompt('Adiniz nedir?', 'Player1');

localStorage.removeItem('points');

onkeydown = barMove;
let set = setInterval(ballMove, 40);

table();

function barMove(e) {

    if (e.keyCode == 39) {
        if (barX < 700) {
            barX += 25;
        }
        // console.log(barX);
    }

    if (e.keyCode == 37) {
        if (barX > 0) {
            barX -= 25;
        }
    }


    bar.style.left = barX + 'px';

}


function ballMove() {


    if (ballX < 0 || ballX > 745) {
        ballMx *= -1;
    }

    if (ballY < 0) {
        ballMy *= -1;
    } else if (ballY > 550 && ballX >= barX - 25 && ballX <= barX + 75) {
        ballMx += 1;
        ballMy += 1;
        ballMy *= -1;
        count++;
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let randomColor = "rgb(" + r + ", " + g + ", " + b + ")";
        ball.style.background = "rgb(" + r + ", " + g + ", " + b + ")";
        bar.style.background = "rgb(" + g + ", " + r + ", " + b + ")";


    } else if (ballY > 550) {
        localAdd();
        
        // general.style.borderBottom = "2px solid red";
        let result = confirm('Uduzdunuz yeni oyuna baslamaq isteyirsinizmi?');
        clearInterval(set);
        if (result) {
            location.reload();
        }
        
    }

    ballX += ballMx;
    ballY += ballMy;

    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
}


function localAdd() {
    let points;
    if (localStorage.getItem('points') === null) {
        points = [];
    } else {
        points = JSON.parse(localStorage.getItem('points'));
    }

    points.push([data, count]);

    localStorage.setItem('points', JSON.stringify(points));
}


// let dataAll = JSON.parse(localStorage.getItem('points'));
// console.log(dataAll[0][0]);


function table() {
    let dataAll = [];
    dataAll = JSON.parse(localStorage.getItem('points'));
    let tr = `<tr>
    <td> Name </td>
    <td> Point </td>
    </tr>`
    for (let i = 0; i < dataAll.length; i++) {
        tr += `<tr>
                <td> ${dataAll[i][0]} </td>
                <td> ${dataAll[i][1]} </td>
                </tr>`
    }



    tbl.innerHTML = tr;
}


function rank(){

}





