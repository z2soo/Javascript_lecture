"use strict";

/*

for(처음값; 조건; 증감;){
    반복할 코드
}

*/

// write

let i = 0;
while ( i < 5) {
    console.log(i);
    i++;    // 이게 없으면 무한루프!
}
console.log(i);

let i2 = 0;
let i3 = 0;
while (i2 < 10) {
    console.log('이건 i3 :' + i3);
    i3 += 2;
    i2++;
}


// 1+2+3+4+5+... 몇까지 더해야 500이 넘나?
    // 1+10 = 55
let a = 0;
let hab = 0;
while ( hab < 5){
    console.log(a);  // 위치에 따라 잘 생각
    hab = hab + a;
    a++;
}
console.log(a-1); // 올바른 결과 계산


console.log('------------1')

// 반복횟수가 명확한 경우 직관적임 (3번)

//ㅋㅋㅋ을 세번 출력하시오
for (let j = 0; j < 3; j++){
    console.log('ㅋㅋㅋ');
    // alart(j);
}

// ㅎㅎㅎ

for (let j = 0; j < 6; j+= 2){
    console.log(j);
}

// 2단 출력
for( let j = 0; j <= 9; j++){
    console.log(`2 x ${j} = ${2*j}`);
}


console.log('-----------2');

// 3단 홀수만 출력
for( let j = 1; j < 10; j++){
    if(j%2==1){
        console.log(`3 x ${j} = ${3*j}`);
    }
}


console.log('----------3');

for (let j = 1; j < 10; j++){
    if(j%2==0){
        continue;
    }
    console.log(`3 x ${j} = ${3*j}`);
}


// do-while
// 조건에 상관없이 한번은 실행 보장

let x = 5;
do {
    console.log(x);
    x++;
} while (x < 10);