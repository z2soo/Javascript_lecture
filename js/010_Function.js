"use strict";


/*
  함수  : 어떤 기능을 정리한것 (필요할 때 쓰려고)
          재사용 가능 ( 재사용을 위해 )

*/

function print2dan() {
    for (let j = 1; j <= 9; j++) {
        console.log(`2 x ${j} = ${2 * j}`);

    }
}

function print3dan() {
    for (let j = 1; j <= 9; j++) {
        console.log(`3 x ${j} = ${3 * j}`);

    }
}

// 파라미터가 있는 함수

function add(a, b) {

    console.log(a + b);
};

// 위의 값 2개를 넘겨받아서 (호출 때, 입력)
// 해당하는 구구단 (호출때 입력)
// 클릭하면 콘솔에 출력

function multi(a){
    for (let j = a; j <= 9; j++) {
        console.log(`9 x ${j} = ${9 * j}`);
    }
}

function cat(){
    alert("애요오오오오옹!")
}

function myFunc(){
    let myBox = document.f.inputHere;      // input box
    let myVal = myBox.value;

    alert(`${myVal}단 구구단을 실행합니다!`);
    for (let j = 1; j <=9; j++){
        console.log(`${myVal} x ${j} = ${myVal*j}`);

    }
    myBox.valu = "";
    return false;    // true: console에 값이 사라짐
                    // false: console에 값이 계속 보임
}

function button1_click(){
    alert("퇴근!");
}