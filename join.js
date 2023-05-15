//1. 문서객체선택
const form = document.querySelector('#joinForm');
const btn = document.querySelector('#joinForm button');
const input = document.querySelectorAll('#joinForm input');

//2. 버튼 클릭이벤트 - 폼데이터를 전송하는 기본 이벤트를 갖고 있음
btn.addEventListener('click', function(e){
    //기본이벤트 제거 - 데이터 전송 막기
    e.preventDefault();

    //입력상자 6개가 모두 입력이 되었다면 데이터 전송, 그렇지 않으면 경고창을 띄우시오.

    //각각의 값을 담을 변수를 선언
    let v01, v02, v03, v04, v05, v06;

    //반복문으로 각각의 변수에 값 담기
    for(let i=0;i<input.length;i++){
        eval('v0'+ (i + 1) + ' = input[' + i + '].value');
    }
    if(v01 != '' && v02 != '' && v03 != '' && v05 != '' && v06 != ''){ //모두 비어있지 않다면
        form.submit(); //폼데이터를 전송하는 메서드
    }else{
        alert('모든데이터를 입력해주세요.');
    }
});

//3. input태그에서 초점이 벗어났을 때 - blur 이벤트
for(let i=0;i<input.length;i++){
    input[i].addEventListener('blur', function(){
        //초점을 벗어난 input에 value값을 담는 변수
        const v = this.value;

        //아이디 입력상자 == 0
        //정규 표현식  - 영어 소문자 + 숫자 + 밑줄과 가운데줄, 5~20글자
        const idReg = /^[a-z0-9_-]{5,20}$/g;

        if(i == 0 && !idReg.test(v) && v != ''){
            this.nextElementSibling.style.display = 'block';
            this.nextElementSibling.style.color = '#ff0000';
            this.nextElementSibling.textContent = '5~20자의 영문 소문자, 숫자와 특수기호(-),(_)만 사용 가능합니다.';
        }else if(i == 0 && v == ''){
            this.nextElementSibling.style.display = 'block';
            this.nextElementSibling.style.color = '#ff0000';
            this.nextElementSibling.textContent = '필수정보 입니다.';
        }else if(i == 0){ // 잘 맞춰서 썼을 때
            this.nextElementSibling.style.display = 'block';
            this.nextElementSibling.style.color = '#03c75a';
            this.nextElementSibling.textContent = '멋진 아이디네요.';
        }

        // 비밀번호 == 1
        //정규표현식 : 영어대소문자숫자특수문자 쓰고, 8~16글자 입력
        //() : 캡쳐할 그룹
        //\d: 숫자에 일치
        //\w: 63개문자가 아닌 것과 일치(특수문자와 일치)
        const passReg = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\w).{8,16}$/;

        if( i == 1 && !passReg.test(v) && v != ''){
            this.nextElementSibling.style.display = 'block';
            this.nextElementSibling.textContent = '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요';
            this.previousElementSibling.classList.add('error');
        }else if(i == 1 && v == ''){
            this.nextElementSibling.style.display = 'block';
            this.nextElementSibling.textContent = '필수정보 입니다.';
            this.previousElementSibling.classList.add('error');
        }else if(i == 1){ //잘 작성했다면
            this.nextElementSibling.style.display = 'none';
            this.previousElementSibling.classList.remove('error');
            this.previousElementSibling.classList.add('active');
        }

        // 비밀번호확인 == 2
        // 기존 비밀번호를 담는 변수
        const passValue = input[1].value;
        
        if(i == 2 && v != passValue && v != ''){
            this.nextElementSibling.style.display = 'block';
            this.nextElementSibling.textContent = '비밀번호가 일치하지 않습니다.';
        }else if(i == 2 && v == '' ){
            this.nextElementSibling.style.display = 'block';
            this.nextElementSibling.textContent = '필수정보 입니다.';
        }else if(i == 2){
            this.nextElementSibling.style.display = 'none'; 
            this.previousElementSibling.classList.add('active');
        }

        //이름작성 == 3
        //정규 표현식 없음
        if(i == 3 && v == ''){
            this.nextElementSibling.style.display = 'block';
        }else if(i == 3){
            this.nextElementSibling.style.display = 'none';
        } 

        //본인확인 이메일 == 4
        //정규표현식 : 이메일 양식
        //+ : 1회 이상 연속적으로 반복되는 문자에 가능한 많이 일치
        const emailReg = /^[a-z0-9_+.-]+@([a-z0-9]+\.)+[a-z0-9]{2,4}$/;

        if(i == 4 && !emailReg.test(v) && v !=''){
            this.nextElementSibling.style.display = 'block';   
            this.nextElementSibling.textContent = '이메일주소를 다시 확인해주세요.';
        }else if(i == 4 && v == ''){
            this.nextElementSibling.style.display = 'block';   
            this.nextElementSibling.textContent = '필수정보입니다.';
        } else if(i == 4){
            this.nextElementSibling.style.display = 'none';   
        }

        //휴대전화 == 5
        //정규 표현식 : 숫자만 작성
        //| : 혹은

        const phoneReg = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
        
        if(i == 5 && !phoneReg.test(v) && v != ''){
            this.nextElementSibling.style.display = 'block';   
            this.nextElementSibling.textContent = '휴대전화번호를 다시 확인해주세요.';
        }else if(i == 5 && v == ''){
            this.nextElementSibling.style.display = 'block';   
            this.nextElementSibling.textContent = '필수정보 입니다.';
        }else if (i == 5){
            this.nextElementSibling.style.display = 'none';
        }

    }); // 블러 이벤트 종류
} //반복문 종류