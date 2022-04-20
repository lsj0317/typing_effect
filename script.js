const content = "Lee Seo Jun" // 나타내고자 하는 글자를 content 변수에 대입
const text = document.querySelector(".text") // 나이핑효과 나타나는 태그 선택
let index = 0;

function typing(){
text.textContent += content[index++] // 이 함수를 호출할 때마다 표시되는 문자는 하나씩 증가
if(index > content.length){ // index 가 텍스트(content 문자열)의 길이보다 길어지게 되면
    text.textContent = "" // 다시 시작할 수 있도록 0으로 만든다
    index = 0;
}
}
setInterval(typing, 500) // typing 함수가 500s 마다 호출되게하기