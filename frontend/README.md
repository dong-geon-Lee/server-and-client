1. pages 폴더 만들고 App.js에 Router부터 세팅하기
2. components 폴더 만들고 Header 만들어서 Router 탐색 쉽게 하기
3. Register / Login 파일 만들고 기본 더미 만들기. 인증부터 해야되니까!
4. 기본 구조 만들어 지면 concurrently 설치해서 client server 돌리기
5. redux-toolkit authSlice 만들기. localStoage.getItem('user') 초기값 삼항연산자 활용하기
6. authSlice extraReducer를 제외하고 기본 세팅만 만들어두기
7. authSlice createAsyncThunk && extraReducer register 만들기
8. proxy 등록하기 http.. 5000
9. toasify 설치하고 App.js css와 컴포넌트 container 넣기
10. Register 컴포넌트에 authSlice 액션 함수 불러오기 register,reset
11. useEffect 사용해서 종속성 넣고 toastify 사용하기.
    useSelector의 변수를 종속성으로 넣고 마지막 reset dispatch 하기 isSuccess:true -> false로 바꿔주기
12. logout 까지 만들어 준다음에 Header로 가서 user의 유무로 삼항 연산자 나열하기
13. Login createAsyncThunk 작업하기
