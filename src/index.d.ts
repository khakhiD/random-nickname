/**
 * 랜덤 닉네임 생성 라이브러리
 * 글로우업 프로젝트를 위한 긍정적인 익명 닉네임 생성 기능 포함
 */

export interface NicknameOptions {
  /** 최대 글자수 제한 (기본값: 10) */
  maxLength?: number;
  /** 최대 숫자 범위 (기본값: 99) */
  maxNumber?: number;
}

export interface RandomNicknameOptions {
  /** 닉네임 타입 */
  type: 'animals' | 'characters' | 'heros' | 'monsters';
}

/**
 * 긍정적인 익명 닉네임을 생성합니다.
 * 형용사 + 동물 + 숫자 형태로 생성됩니다.
 * 
 * @param options - 닉네임 생성 옵션
 * @returns 생성된 닉네임 (예: "귀여운 토끼12")
 * 
 * @example
 * ```typescript
 * import { getPositiveNickname } from 'random-nickname';
 * 
 * // 기본 사용
 * const nickname = getPositiveNickname();
 * console.log(nickname); // "아름다운 고양이45"
 * 
 * // 옵션 지정
 * const shortNickname = getPositiveNickname({ maxLength: 8, maxNumber: 9 });
 * console.log(shortNickname); // "쿨한 여우3"
 * ```
 */
export function getPositiveNickname(options?: NicknameOptions): string;

/**
 * 기존 랜덤 닉네임을 생성합니다.
 * 
 * @param type - 닉네임 타입
 * @returns 생성된 닉네임
 * 
 * @example
 * ```typescript
 * import { getRandomNickname } from 'random-nickname';
 * 
 * const nickname = getRandomNickname('animals');
 * console.log(nickname); // "용감한 호랑이"
 * ```
 */
export function getRandomNickname(type: 'animals' | 'characters' | 'heros' | 'monsters'): string | undefined;

/**
 * 필터링된 형용사 개수를 반환합니다.
 * 
 * @returns 형용사 개수
 * 
 * @example
 * ```typescript
 * import { getFilteredAdjectivesCount } from 'random-nickname';
 * 
 * const count = getFilteredAdjectivesCount();
 * console.log(count); // 102
 * ```
 */
export function getFilteredAdjectivesCount(): number;

// CommonJS 모듈 지원
declare module 'random-nickname' {
  export = {
    getPositiveNickname,
    getRandomNickname,
    getFilteredAdjectivesCount
  };
} 