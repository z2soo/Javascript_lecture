"use strict";

/* <1. 논리연산자>
    <,>,=>,<=,==
*/

/* <2. 결합연산자>
    논리연산자 여러개 묶을 때 사용
    
    && (and) : A && B: A,B 모두 만족하면 true
    || (or) : A || B : A나 B를 만족하면 true
 */


 // x = 10, y = 20
 // x가 5보다 크고, y가 10보다 작다

 let x = 10;
 let y = 20;
 let a = x > 5 && y < 10;
 console.log(a);

// x가 5보다 크거나, y가 10보다 작다
 let b = x > 5 || y < 10;
 console.log(b);


console.log('----------------1');

//놀이동산에서 놀이기구 타도 되는지 안되는지 체크
//키, 나이

let height = 180;
let age = 30;

// 나이가 10살 이상이고, 키가 200넘으면 가능
let ok = age >= 10 && height > 200;
console.log(오케이);

// 키 200넘거나, 나이가 10살 이상이면 가능
// let ok2 = height > 200 || age >= 10;

// 확률이 높은 것은 앞으로 배치하면 연산횟수를 줄일 수 있음
let ok2 = age >= 10 || height > 200;
console.log(ok2);


// 키가 200넘으면 타면 안됨
// 서장훈 방문
height = 210;
let ok3 = !(height > 200);
console.log(ok3);

console.log('-------------------2');

/*
 삼항 연산자
 조건식 ? true값 : false값
*/

age = 20;
// 나이가 10살이 넘으면 welcome, 아니면 go home
let msg = age > 10 ? 'welcome' : 'go home';
console.log(msg);


// Test

age = 30;
height = 180;
// 입장료
// 키가 200 넘거나 나이가 20이상이면 10000원, 아니면 5000원
let ticket = height > 200 || age >= 20 ? 10000 : 5000;

// 할인
// 나이가 짝수면 2000원, 아니면 500원 할인
// 짝수 -> age % 2 == 0   -> 짝수는 2로 나누면 항상 나머지가 0이 나옴. 그걸 이용!
let discount = age % 2 == 0 ? 2000 : 500;

// 총요금
let total = ticket - discount;
console.log(total);


console.log('------------------3');

/*
 equality. 같다.
*/

let stringNum = "10";
let numberNum = 10;

// == (타입 안따짐)
console.log(stringNum == numberNum);  // true
console.log(stringNum != numberNum);  // -> 뒤집으면 false


// === (타입까지 따짐)
console.log(stringNum === numberNum);  // false
console.log(stringNum !== numberNum);  // true -> 둘은 같지 않음. 따라서 true


console.log('-----object------4')

let me1 = { name : '이정재', age : 30 };
let me2 = { name : '이정재', age : 30 };
let me3 = me1;

console.log(me1 == me2);
console.log(me1 === me2);
console.log(me1 == me3); // t 번지수가 같으니까

// 0, null, empty string ''

console.log(0 == false); // t
console.log(0 === false); // f

console.log('' == false); // t
console.log('' === false); // f

console.log(null == undefined); // t
console.log(null === undefined); // f