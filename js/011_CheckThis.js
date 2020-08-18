function check() {

    let idInput = document.f.i1;    // id InputBox
    let pwInput = document.f.i2;
    let pw2Input = document.f.i3;
    let phoneInput = document.f.i4;


    if (isEmpty(idInput) || lessthan(idInput, 4)) {
        alert('id 에러');
        //  에러 걸리면

        idInput.value = "";  //내용 초기화
        idInput.focus();    // 거기에 커서

        return false;

    }


    //id 한것처럼. pw란 비어있으면 에러

    if (isEmpty(pwInput)
        || lessthan(pwInput, 5)
        || notEquals(pwInput, pw2Input)) {
        alert('pw 에러');
        //에러 걸리면

        pwInput.value = "";  //내용 초기화
        pw2Input.value = "";
        pwInput.focus();    //거기에 커서
        return false;

    }


    /*
     if (pwEmpty(pwInput)) {
         alert('pw 에러')
 
 
     }
    */


    if (isNotNumber(phoneInput)) {
        alert('폰번 에러')
        phoneInput.value = "";
        phoneInput.focus();
        return false;
    }







    return true;





}