import { jwtDecode } from 'jwt-decode';

// JWT payload의 타입 정의 (필요에 따라 확장)
interface JwtPayload {
  exp: number;
  iat: number;
  // 기타 필요한 속성들
}

export const isExpiredJwt = (token: string): boolean => {
  const payload: JwtPayload = jwtDecode(token);
  return Date.now() >= payload.exp * 1000;
}
