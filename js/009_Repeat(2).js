"use strict";

let a = 0;
while (true) {
    console.log(a);
    a++;
    if (a > 3) {
        break;  // 반복문 탈출할때. 
    }
}


for (let a = 0; ;) {
    console.log(a);
    a++;
    if (a > 3) {
        break;
    }

}

console.log('------');

//위기   2중 for문

for (let dan = 2; dan <= 9; dan++) {
    console.log(dan + "단-----");
    for (let i = 1; i <= 9; i++) {
        console.log(`${dan} x ${i} = ${dan * 1}`);
    }


}



/*
ㅋ
ㅋㅋ
ㅋㅋㅋ
ㅋㅋㅋㅋ
ㅋㅋㅋㅋㅋ
*/

function call() {

    for (let a = 1; a < 6; a++) {
        for (let b = 1; b <= a; b++) {
            document.write('ㅋ');
        }
        document.write('<br>');
    }
}


/*
ㅋㅋㅋㅋㅋ
ㅋㅋㅋㅋ
ㅋㅋㅋ
ㅋㅋ
ㅋ
*/