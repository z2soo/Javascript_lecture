"use strict";

/* <1. 조건문>
    if (conditions){
         만족시 이 범위 실행
    } else {
        아니면 이 범위 실행
    }
*/


// 나이가 70 이상이면 '안녕하십니까'
let age = 70;
if (age>=70) {
    console.log('안녕하십니까');
} else {
    console.log('안녕')
};


// 아이가 1살이 넘고 5살 미만이면 ㅎ0ㅎ
// 아니면 ;0;
let child = {age:3, height : 100};
if (1<child.age<5) {
    console.log('ㅎ0ㅎ');
} else {
    console.log(';0;')
}


if (true) {
    console.log('true');
}

if (false) {
    console.log('false');
}

// 다중 if문 : if문 여러개 쓴거 (참인거 다 실행)

let a = 3;

if (a % 2 == 0){
    console.log(a + "는 짝수다");
    console.log(a + "는 2배수다");
}

if ( a % 3 == 0){
    console.log( a + "는 3배수다");
}

if ( a % 4 == 0){
    console.log(a + "는 4배수다");
}


console.log('------------1');

// if, else if (여러 옵션중 하나만!)

/*
1. 키가 150 이상이면 welcome
2. 130 <= 150이면 welcome friend
3. 100 <= 150이면 welcome boy
4. 나머지는 ??
*/

let tall = 130;

if (tall >= 150){
    console.log('welcome');
}else{
    if (tall >= 130){
        console.log('welcome friend');
    }else{
        if (tall >= 100){
            console.log('welcome boy');
        }else{
            console.log('??');
        }
    }
}


// 깔끔하게!--->


if (tall >= 150){
    console.log('welcome');
}else if (tall >= 130){
    console.log('welcome friend');
}else if (tall >= 100){
    console.log('welcome boy');
}else{ 
    console.log('??');
}


/*
1. x는 5배수
2. x는 2배수
3. x는 4배수
4. 나머지는 해당 없음
*/

let x = 4;
if (x % 5 == 0) {
    console.log(x + "는 5배수");
}else{ 
    if(x % 2 == 0){
    console.log(x + "는 2배수");
}else{ 
    if(x % 4 == 0){
    console.log(x + "는 4배수");
}else{
    console.log("해당 없음"); 
}
}
}


// 중첩 if : if문 안에 if문
// 두 조건이 모두 참일때 두 조건 모두 실행
// 첫번째 조건이 참일 때 실행

let b = 2;

if (b % 2 == 0) {
    console.log(b + "는 2배수");
    if (b % 5 == 0) {
    console.log(b + "는 5배수");
    }
}

let c = 0;

if (c % 3 == 0) {
    console.log('3배수');

    if ( c % 4 == 0) {
    console.log('4배수');
    } else{
    console.log('3배수라 첫번째 실행 됐지만' + '4배수는 해당 안됨');
    }
} else{
    console.log('c에 4배수 들어있지만 중첩 if라' + '실행 자체가 안됨');
}


console.log('--------3');

let id = 'mz';
let pw = 123;

/*
    test
    id 틀리면 'id error'
    pw 틀리면 'pw error'

    둘다 맞으면 로그인 성공
*/