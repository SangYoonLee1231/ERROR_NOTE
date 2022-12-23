<div align="center">

# 🚨📒 ERROR NOTE

<img src="https://img.shields.io/badge/since-2022.11-grey"></a>
<img src="https://img.shields.io/badge/author-SangYoonLee-yellow"></a>
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FSangYoonLee1231%2FERROR_NOTE&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

</div>

- 개발 중 <strong>마주했던 에러들을 어떻게 해결했는지</strong> 간단히 기록하는 공간입니다.

- 볼륨이 커서 해결 과정이 길었던 애러는 블로그 포스트로 따로 작성하여 링크를 올렸습니다.

<br/>

<div align="center">

<h3><a href="https://sangyoonlee1231.github.io/ERROR_NOTE/">👉 ERROR NOTE 바로 가기 👈</a></h3>

</div>

<br/><br/>

## 💡 공통적인 에러 해결 방법

- 도저히 알 수 없는 에러가 발생했을 때 아래의 시도를 통해 해결한 적이 여럿 있었다.

  - <strong>VS Code를 재실행한다.</strong>

  - <strong>클라이언트를 재부팅한다.</strong>

  - <strong>관련 패키지의 버전이 잘 맞는지 확인한다. (패키지를 다운그레이딩 해야할 수도 있다)</strong>

<br/><br/>

## 프로젝트 개발 일지

#### ~ 22.12.22

- 레이아웃 구현, md 파일 불러오기 기능 구현 (mdx 사용)

#### 22.12.23

- md 파일 불러오기 기능 포기, 카테고리 클릭 시 목차 띄우고 해당 목차 클릭시 md 파일의 해당 위치로 이동하도록 기획 변경

- Mock Data 작성 일부 (React 2022년 11월만) 완료, fetch 함수를 통해 Data 불러오기 성공

  - 그러나 GitHub Page로 배포하면서 Data가 화면에 뿌려지지 않고 있는 상태

- Routing 기능으로 이동한 페이지에서 새로 고침 시, 에러가 발생하여 화면이 띄워지지 않는 문제 발생 -> 원인 파악 및 해결 시도 but 실패

- Routing URL 문제 (Routing으로 연결된 링크 클릭 시 <code>/ERROR_NOTE</code>가 사라짐) 발생 -> BrowserRouter에 basename을 추가하여 해결 시도 but 실패
