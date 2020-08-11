"use strict";

console.log("dd");

/* <1. 유용한 단축키 몇가지>
    코드 복사: ctrl + x
    코드 한줄 삭제: ctrl + shift + k
    코드 이동: alt + 방향키
*/

/* <2. 변수>
    - 변할 수 있는 수(상황, 값)
    - 프로그램 진행 중 발생하는 데이터 임시저장
    - 중복값 제어
    - 데이터를 담는 상자
    - 수정 가능한 데이터
*/

/* <3. 변수 생성 방법>
    1. 변수 생성
    키워드(상자) 변수명(상자이름);

    2. 변수 값 넣기
    변수명 = 넣을 값;

    3. 데이터 타입
    number, string, boolean, null, undefined, object function
*/


// <4. 변수 선언 방법 3가지>
console.log('\n---변수 선언 var---')
// 1. var
// 변수 재선언 및 재할당 가능
var a = 1;
var b = 2;
var c = 1.5;
console.log('a+b:', a+b);
console.log('c type is:', typeof c);
c = toString(c);
console.log('c tpye is:', typeof c);

// 2. let
console.log('\n---변수 선언 let---')
// 변수 재선언 불가 및 재할당 가능 
let age;
age = 50;
console.log(age);
age = 30;                   //변수 재할당 가능
console.log(age);
//let age;                  //변수 재선언 오류 발생

// 3. const
console.log('\n---변수 선언 const---')
// 변수 재선언 및 재할당 불가능
const address = 'seoul';
console.log(address);
// address = 'anyang';     //변수 재할당 오류 발생



// <5. var 왜 사용 안되는지?>
console.log('\n---var 사용 지양: global scope---')
/* 1. global scope (hoisting)
 var를 사용하면 맨 처음에서 선언된다. 즉, 선언 변수를 선언문 이전에 참조하더라도 undefine일 뿐 
 참조 error가 발생하지는 않는다. 단, let의 경우에는 참조 오류(reference error)가 발생한다.
 스코프의 선두에서 선언 단계와 초기화 단계가 실행된다. 따라서 변수 선언문 이전에 변수를 참조할 수 있다.
 */

// 참고로, 변수는 선언 단계 > 초기화 단계 > 할당 단계 에 걸쳐 생성되는데
// var 으로 선언된 변수는 선언 단계와 초기화 단계가 한번에 이루어진다.

console.log(whydontusevar1);       // undefined
var whydontusevar1;
console.log(whydontusevar1);       // undefined
whydontusevar1 = 1;              // 할당문에서 할당 단계가 실행된다.
console.log(whydontusevar1);       // 1

//let 로 선언된 변수는 선언 단계와 초기화 단계가 분리되어 진행된다.
// 스코프의 선두에서 선언 단계가 실행된다.
// 아직 변수가 초기화(메모리 공간 확보와 undefined로 초기화)되지 않았다.
// 따라서 변수 선언문 이전에 변수를 참조할 수 없다.

//console.log(whydontusevar2);       // ReferenceError: foo is not defined
let whydontusevar2;                // 변수 선언문에서 초기화 단계가 실행된다.
console.log(whydontusevar2);       // undefined
whydontusevar2 = 2;                // 할당문에서 할당 단계가 실행된다.
console.log(whydontusevar2);       // 1

/* 2. 블록 무시 ignore the block
var는 기본적으로 function scope를  가지고, let, const는 block scoper를 가짐
즉, let, const는 블럭을 나가면 사용될 수 없음
*/
console.log('\n---var 사용 지양: ignore the block---')
{
    var whydontusevar3 = 'var';
    console.log(whydontusevar3);    //var 출력
}
console.log(whydontusevar3);        //var 출력

{
    let whydontusevar4 = 'let';
    console.log(whydontusevar4);    //let 출력
}
//console.log(whydontusevar4);        //refernece error


// <6. 연습문제>
console.log('\n---연습문제---');
let myAge = 25;
let myHeight = 168;
console.log('나이:', myAge);
console.log('키:', myHeight);

// <7. string>
console.log('\n---string---');
let hey = 'hey';
console.log(hey);
let ah = 'ah';
console.log(hey + ah);
console.log('hey 길이:', hey.length);
console.log('hey 인덱스 1:', hey.charAt(1));
// 인덱스는 0부터 시작
console.log('a c'.length);
// 공백을 포함
hey = hey.toUpperCase()             
// javascript에서 method의 경우 괄호 포함!
// string.toUpperCase()
console.log('hey 대문자:', hey);


// <7. boolean>
// boolean: true, false
// fase: "", null, 0, undefined, Nan
// true: 1, other
console.log('\n---Boolean---')
let t = true;
let f = false;
console.log('t:', t);
console.log('f:', f);
let con = 5 > 3;
console.log('5>3:', con);
console.log('t의 type:', typeof t);


// <8. Function>
console.log('\n---Function---');
function name(){
    let myName = 'Lim';
    document.write(myName + '\tis\t' + myAge + '\tyears old.');
};

function button1_click(){
    let phModel = 'Apple 8+';
    let company = 'Apple';
    let price = '1,000,000';
    let phNum = '010-xxxx-xxxx';
    let quan = 'True';
    
    console.log(`모델명: ${phModel} 
                \n제조사: ${company}
                \n가격:  ${price} 
                \n번호: ${phNum} 
                \n재고: ${quan}`);
    document.write(`모델명: ${phModel} <br>    
                    \n제조사: ${company} <br>
                    \n가격:  ${price} <br>
                    \n번호: ${phNum} <br>
                    \n재고: ${quan}`);
}     


// <9. dynamic 타이핑 언어>
let val = 5;
console.log(`val 타입: ${typeof val}`);             //number
val = val + '00';
console.log(`val+'00' 값: ${val}`);                 //500
console.log(`val+'00' 타입: ${typeof val}`);        //string


// <10. 형변환>
val = Number(val);
console.log(`val 타입: ${typeof val}`);             //number
val = String(val);                                 
console.log(`val 타입: ${typeof val}`);             //string
console.log(`val 타입: ${typeof val*1}`);           //number; number casting 외 다른 방법


// <11. object, json>
let me = {name: 'Mr.리', age: 30};
console.log(me);
me.name = 'Mr.박';
console.log(me);

me = {Height: 170, weight: 60};
console.log(me);

const me2 = {name: 'KIM', age: 100};
me2.name = 'PARK';
console.log(me2);           //const인데 값이 변한다??

