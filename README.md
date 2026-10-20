# K-DRIFT pilot homepage

D안의 이미지 중심 디자인을 선택한 첫 파일럿 홈페이지입니다. 구성원 의견 수렴을 위해 공개한 사이트이며, 하단에 `PILOT 01`을 표시합니다.

- 홈페이지: https://kasishongscience.github.io/kdrift/
- `index.html`: 연구 소개, 관측 성과, 망원경, 연구팀, 논문·영상·보도자료
- `pilot.css`: 파일럿 레이아웃과 반응형 스타일
- `d.css` / `shared.css`: 기존 D안의 기본 스타일
- `shared.js`: 모바일 메뉴와 이미지 확대
- `assets/`: 사용 이미지, KASI CI, 공개 홍보 PDF
- `a.html` / `d.html`: 기존 개별 시안 주소를 홈페이지로 연결

## 게시와 수정

GitHub Pages는 `main` 브랜치의 루트에서 배포합니다. 별도 설치나 빌드가 필요하지 않습니다. `.nojekyll`은 정적 파일을 그대로 게시하도록 합니다.

내용은 `index.html`, 화면 구성은 `pilot.css`, 사진은 `assets/`에서 수정하고 커밋한 뒤 push합니다. `assets/`의 파일명과 HTML 참조를 함께 수정하세요. CSS/JS를 변경하면 HTML에 붙인 `?v=pilot01` 값도 갱신하면 됩니다. 배포 후 Pages 최신 빌드의 커밋이 방금 올린 커밋과 일치하는지 확인합니다.

로컬 미리보기: 이 폴더에서 `python3 -m http.server 8765 --bind 127.0.0.1`을 실행하고 `http://127.0.0.1:8765/`를 엽니다.

현재 `noindex,nofollow`를 유지합니다. 검색 노출을 줄이기 위한 설정이며 접근 제한은 아닙니다. 전체 팀 명단은 아직 싣지 않았으며 연구책임자와 2024 워크숍 사진을 소개합니다.

## 자료 출처

- 연구 소개와 관측 성과: [2026.01.27 KASI 공식 보도자료](https://www.kasi.re.kr/kor/publication/post/newsMaterial/32216), 제공된 최종 보도자료·연구책임자 인터뷰.
- KASI CI: [공식 CI 안내](https://www.kasi.re.kr/kor/pageView/32)의 원본 배포 파일. 상단·하단은 `한글가로조합(흰색글씨).png`를 비율 유지하여 축소했고 파비콘은 공식 `ci_color.png`를 사용했습니다. 색과 도안을 변경하지 않았습니다.
- `fornax-wide.webp`: 제공 홍보 자료 `[260127] 삽입 그림.ppt` 슬라이드 17의 전체 관측 그림(`image26.png`).
- `ngc1365.webp`: 같은 자료의 최종 비교 그림, 슬라이드 21 왼쪽 K-DRIFT G1 패널(`image30.png`). DESI 패널과 구분했습니다.
- `optical-system.webp`: 같은 자료에 포함된 광학계 그림(`image5.png`).
- 별 일주 운동 사진: 전영범 / K-DRIFT 프로젝트. 망원경·워크숍·패스파인더 사진은 프로젝트 제공 자료이며 페이지에 출처를 표시했습니다.
- YouTube 링크: 제공된 `K-DRIFT홍보유튜브.docx`에서 제목과 연결 주소를 확인했습니다. 영상 파일을 재호스팅하지 않습니다.
- 프로젝트 소개 논문: [Ko et al. (2025)](https://arxiv.org/abs/2510.22250).
- 광학 성능 논문: [Lee et al. (2025), JATIS 11(4), 048002](https://doi.org/10.1117/1.JATIS.11.4.048002).

사진·관측 영상·CI·논문 및 홍보자료의 권리는 원 권리자에게 있습니다. 원본 홍보 폴더 전체는 이 저장소에 포함하지 않습니다.

## 검증 기록 — 2026-10-20

데스크톱과 모바일 390px·320px 레이아웃, 가로 넘침, 모바일 메뉴와 섹션 이동, 이미지 확대·Escape 닫기, 광학계 설명 펼침, 기존 D안 주소의 섹션 연결을 브라우저에서 확인했습니다. HTML의 로컬 파일·앵커 33개와 JavaScript 문법 검사를 통과했습니다. 외부 YouTube 영상의 재생 및 실제 휴대전화별 검증은 별도로 수행하지 않았습니다.
