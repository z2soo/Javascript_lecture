//자바스크립트 유효성 검사 라이브러리 제작 완료
/* 일반적으로 유효성 검사 하는것들은
   잘 정리해서 (함수 형태)
   나중에 쓰기 편하게(재사용)

   얘는 베이스 저장용
   지금 이 파일을 베이스로
   html마다(조건마다) 맞게 갖다 쓸 수 있게

   ex)이 파일에 정리한 함수 중 조건이 걸리면 true
      그 true를 다른 check에서 쓸 수 있게 

   answprk dlTdmaus true, 괜찮으면 false

   <input>을 넣으면
   그 곳에 글자가 없으면 true, 있으면 false
*/

function isEmpty(input) {
    return !input.value;  // 없다

}


/*
 <input>, 글자수를 넣으면
그 긎라수보다 작게 썼으면 true, 아니면 false

*/

function lessthan(input, len) {
    return input.value.length < len;



}


/*

  <input> x 2 넣으면
  내용이 다르면 true, 같으면 false

*/


function notEquals(input1, input2) {
    return input1.value != input2.value;



}


/*
function pwEmpty(input2) {
    return !input2.value;
}
*/



/*
<input>을 넣어서 
숫자가 아니면 true, 숫자면 false
*/



function isNotNumber(input) {
    return isNaN(input.value);
}

