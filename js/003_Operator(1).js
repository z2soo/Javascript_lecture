"use strict";

/*
대입 연산자 =, <-
같음 의미 ==., ===
*/


let a = 5;
let b = "1";

let c = a + b;

console.log(typeof c);
console.log(a + b);  // num + str = str
console.log(a / b);  // num / str = num
let temp = a/b;
console.log(typeof temp);

console.log(a == b);  //t
console.log(a === b);  //f

console.log('----------------------1')
/*
 산술 연산자: + - * / %
*/

let x = 5;
let y = 2;

let add = x + y;
let sub = x - y;
let mul = x * y;
let div = x / y;
let remain = x % y;

console.log(add);
console.log(sub);
console.log(mul);
console.log(div);

console.log(remain);  // 5/2의 나머지

console.log('------------------2');
/*
    복합 연산자: +=, -=, *=, /=, %=
*/

// x = 5

x = x + 1;
console.log(x);
x += 1;  // x = x + 1;
console.log(x);
x -= 2;
console.log(x);
x *= 2;
console.log(x);
x /= 5;
console.log(x);
x %= 2;
console.log(x);

console.log('--------------------3');


// 전위, 후위 연산자 ++, --
x +- 1;
console.log(x);
x ++;           //+1
-- x;           //-1

let x2 = 1;
let y2 = x2++;
console.log(x2);    //2
console.log(y2);    //1 왜 2가 아니고?
                    //x2는 원래 1이엇음, 위에서 y2 = x2++하면 y2에 x2 까지만 넘긴 이후에 ++ 실행

let x3 = 1;
let y3 = ++x3;
console.log(x3);    //2
console.log(y3);    //2
