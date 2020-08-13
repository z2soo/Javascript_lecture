"use strict";

/*
조건문
if(condition){
    만족시 이 범위가 실행
}   else {
    아니면 이 범위가 실행(조건 외)
}
*/
// 나이가 70이상이면 '안녕하십니까'
let age = 50;

if (age >= 70) {
    console.log('안녕하십니까~');
} else {
    console.log('아직 창창하네요');
}

// 나이가 10살 미만이고, 키가 150 미만이면 'ㅋㅋㅋ'
// 아니면 '안녕?'
let child = { age: 3, height: 100};

if (child.age < 10 && child.height <150) {
    console.log('ㅋㅋㅋ');
} else {
    console.log('안녕?');
}

// 아이가 1살이 넘고 5살 미만이면 'ㅎㅅㅎ'
if (1 < child.age && child.age < 5 ) {
    console.log('ㅎㅅㅎ');   
} else {
    console.log('@@@@');
}


console.log('-----------1')

// 성인, 아이가 동반탑승 가능여부
let adult = {age: 30, height: 180};

// 성인 나이가 20살이 넘으며, 아이가 3살 이상이고,
// 아이 키가 80 이상이면, "동반탑승 가능"
// 조건에 안맞으면 탑승불가

if (adult.age > 20 && child.age >= 3 && child.height >= 80){
    console.log('동반탑승 가능');
} else{
    console.log('탑승불가');
}

// &&가 ||보다 우선순위 높음

/*
    t // t && t = t
    t // t && f = t
    t // f && t = t
    t // f && t = t
*/