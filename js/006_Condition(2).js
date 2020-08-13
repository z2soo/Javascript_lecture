"use strict";

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
    id 틀리면 'id error' 출력
    pw 틀리면 'pw error' 출력

    둘다 맞으면 '로그인 성공' 출력
*/

if (id == 'mz') {

    if (pw == 123) {
    console.log('성공');
    } else{
    console.log('pw error');
    } 
} else{
    console.log('id error');
    }