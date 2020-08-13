"use strict";

/*
 Switch Case (조건문) : if문과 대체 가능
    point : 흐름제어
 */

 let age = 21;

switch (age) {
    case 2 :
        console.log('이잉');
        break;
    case 20 :
        console.log('이이잉');
        break;
    case 30 :
        console.log('이이이잉');
        break;

    default :
        console.log('else(나머지)');
    break;
}


// 1.아아 2.카페라떼 3.바닐라라떼 4.마끼야또
// 아니면 "만들줄 몰라요"
let menu = 3;
switch (menu) {
    case 1:
        console.log('아아');
    break;
    case 2:
        console.log('카페라떼');
    break;
    case 3:
        console.log('바닐라라떼');
    break;
    case 4:
        console.log('마끼야또');
    break;

    default :
        console.log('else(나머지)');
    break;
}


// ctrl + a 한 뒤 ctrl + k, f
// 달력 (x월을 x일까지)

// 1, 3, 5, 7, 8, 10, 12   31
// 4, 6, 9, 11             30
// 2                       28

let match = 1;
switch (match) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log('31일까지');
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log('30일까지');
        break;
    case 2:
        console.log('28일까지');
    default :
        console.log('else(나머지)');
    break;
}