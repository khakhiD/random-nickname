const adjectives = require('./constants/adjectives.js');
const { data } = require('./constants/data.js');
const { generatePositiveNickname, getAdjectivesCount } = require('./utils/generator.js');

function getRandomInteger(max) {
  return Math.floor(Math.random() * max);
}

// 기존 랜덤 닉네임 생성 함수
function getRandomNickname(type) {
  if (!['animals', 'characters', 'heros', 'monsters'].includes(type)) return;

  const adjective = adjectives[getRandomInteger(adjectives.length)];
  const noun = data[type][getRandomInteger(data[type].length)];

  return `${adjective} ${noun}`;
}

module.exports = {
  // 기존 함수들
  getRandomNickname,
  
  // 글로우업 프로젝트용 함수들
  getPositiveNickname: generatePositiveNickname,
  getFilteredAdjectivesCount: getAdjectivesCount,
};
