const { getPositiveNickname, getFilteredAdjectivesCount } = require('./src/index.js');

// 필터링된 형용사 개수 확인
console.log(`=== 필터링된 형용사 개수: ${getFilteredAdjectivesCount()}개 ===`);
console.log('');

// 기본 설정으로 테스트
console.log('=== 기본 설정 (10글자 이하, 2자리 숫자) ===');
for (let i = 0; i < 5; i++) {
  const nickname = getPositiveNickname();
  console.log(`${i + 1}. ${nickname} (${nickname.length}글자)`);
}

console.log('');

// 짧은 닉네임 테스트
console.log('=== 짧은 닉네임 (8글자 이하, 1자리 숫자) ===');
for (let i = 0; i < 5; i++) {
  const nickname = getPositiveNickname(8, 9);
  console.log(`${i + 1}. ${nickname} (${nickname.length}글자)`);
}

console.log('');

// 긴 닉네임 테스트
console.log('=== 긴 닉네임 (12글자 이하, 3자리 숫자) ===');
for (let i = 0; i < 5; i++) {
  const nickname = getPositiveNickname(12, 999);
  console.log(`${i + 1}. ${nickname} (${nickname.length}글자)`);
}

console.log('');
console.log('함수 사용법:');
console.log('- getPositiveNickname() : 기본 (10글자 이하, 2자리 숫자)');
console.log('- getPositiveNickname(8, 9) : 짧은 닉네임 (8글자 이하, 1자리 숫자)');
console.log('- getPositiveNickname(12, 999) : 긴 닉네임 (12글자 이하, 3자리 숫자)'); 