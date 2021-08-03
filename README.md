# Netflix Site 제작하기
Netflix Global English Site를 PC와 Mobile 버전으로 제작한다.<br>
와이어프레임을 활용하여 HTML 마크업부터 CSS 및 Javascript까지 직접 완성한다.
- 배포 사이트 : https://eseo128.github.io/Netflix/
 
# Tool Stack
<p>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=HTML5&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=CSS3&logoColor=white"/>&nbsp;&nbsp;

# Function
- 반응형 레이아웃
- PC 및 Mobile 접근성
- Sign in 버튼 클릭시 로그인 창 제시
- 이메일 입력 칸에 cursor를 focus하면 placeholder처럼 보이는 span을 transform을 줘서 움직이는 효과 구현
- FAQ는 radio input으로 제작하고, check 될 시 content를 보여주는 효과를 Script대신 CSS로 간편하게 구현
  <br>(display : none은 transiton을 쓸 수 없어서 max-height 써서 유동적으로 적용한다.)
- modal login은 show, hide가 아닌 fadeIn, fadeOut을 사용
- login 창이 나타나면 overflow: hidden을 추가하여 스크롤이 되지 않도록 함
- Mobile 버전에서 download와 create section 내 이미지와 글자를 PC 버전과 반대로 배치 함 <br>(flex의 order 속성을 이용)

# Site Image (PC ver.)
 
![image](https://user-images.githubusercontent.com/34049770/128049985-3c3ae667-fc53-4cf9-b80f-eac7643a9ca1.png)

