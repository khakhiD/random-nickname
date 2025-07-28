const { filteredAdjectives } = require('./filter.js');
const { data } = require('../constants/data.js');

// 새로운 긍정적이고 귀여운 형용사들 추가
const newPositiveAdjectives = [
  '사랑스러운', '달콤한', '포근한', '따뜻한', '상냥한', '친절한', '착한',
  '순한', '부드러운', '예쁜', '깔끔한', '신나는', '즐거운', '행복한',
  '기쁜', '웃는', '미소짓는', '활발한', '에너지 넘치는', '생기있는',
  '밝은', '희망찬', '꿈꾸는', '상상력 풍부한', '창의적인', '독창적인',
  '특별한', '멋진', '훌륭한', '완벽한', '최고의', '최강의', '최고급',
  '프리미엄', '럭셔리', '고급스러운', '우아한'
];

// 필터링된 형용사와 새로운 긍정적 형용사 합치기
const combinedPositiveAdjectives = [...new Set([...filteredAdjectives, ...newPositiveAdjectives])];

function getRandomInteger(max) {
  return Math.floor(Math.random() * max);
}

function generatePositiveNickname(maxLength = 10, maxNumber = 99) {
  const adjective = combinedPositiveAdjectives[getRandomInteger(combinedPositiveAdjectives.length)];
  const animal = data.animals[getRandomInteger(data.animals.length)];
  const number = Math.floor(Math.random() * maxNumber) + 1; // 1-maxNumber 사이의 숫자
  
  const nickname = `${adjective} ${animal}${number}`;
  
  // 글자수 제한
  if (nickname.length > maxLength) {
    return generatePositiveNickname(maxLength, maxNumber);
  }
  
  return nickname;
}

module.exports = {
  generatePositiveNickname,
  getAdjectivesCount: () => combinedPositiveAdjectives.length
}; 