# server-and-client

1. backend - 기본 세팅
2. routes - 연결하기
3. controllers - 리팩토링
4. middleware - errorHandler 오류 처리기
5. config - 데이터베이스 연결하기
6. models - 데이터 스키마 만들기
7. controllers - REST API 만들기
8. models - user 모델 만들기, goals에 바로 ref 추가할것
9. routes - user
10. controllers - user REST API 만들기.

- 사전작업 안내, user 컨트롤러 짜기전에 아래부터 해라!
  const jwt = require('jsonwebtoken');
  const bcrypt = require('bcryptjs');
  const asyncHandler = require('express-async-handler');
  const User = require('../models/userModel');

- bcrypt 로 register => hash salt 사용. login => compare 함수 사용하기
- jwt getMe => 먼저 generateToken 함수 만들기

11. middleware - authHandler 만들기 Jwt! register, login 다하고 getMe 남들떄!
12. goalRoutes.js에서 protect 인증 적용 전부다하기
13. goalController에서 user가 있는 조건을 추가하기 {user: req.user}
