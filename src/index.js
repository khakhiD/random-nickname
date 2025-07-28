const { adjectives, newPositiveAdjectives } = require('./constants/adjectives.js');
const { data } = require('./constants/data.js');

function getRandomInteger(max) {
  return Math.floor(Math.random() * max);
}

// 네거티브 워드 필터링
const filteredAdjectives = adjectives.filter(adj => {
  const negativeKeywords = [
    '똥', '방구', '설사', '암내', '입냄새', '발냄새', '땀냄새', '코딱지',
    '뻥쟁이', '뻔뻔한', '설레발', '뇌절', '히키코모리', '쫄딱 망한',
    '형편없는', '불쌍한', '무시', '욕심', '이기적인', '사악한', '악독한',
    '지독한', '악마같은', '뿡뿡대는', '여드름쟁이', '똥통', '양말로 똥',
    '카레맛 똥', '토마토맛 토', '토맛 토마토', '똥맛 카레', '꾀죄죄한',
    '구질구질한', '추잡한', '고약한', '지저분한', '짜증나는', '화난',
    '졸린', '고주망태인', '술에 취한', '과식하는', '욕망의', '뜨거운',
    '어여쁜', '기억이 안나는', '분노에 가득찬', '삐쩍 마른', '뚱뚱한',
    '배가 튀어나온', '골골대는', '미간이 넓은', '이마가 넓은', '숱이 많은',
    '앙증맞은', '거대한', '미세한', '운동을 잘하는', '독서광', '게임을 좋아하는',
    '게임을 잘하는', '더운', '추운', '시원한', '적당한', '날카로운',
    '네모난', '둥글둥글한', '예민한', '쇼크받은', '순간이동하는',
    '물렁물렁한', '제멋대로 구는', '성공한', '출세한', '질투하는',
    '거짓말을 잘하는', '야심찬', '엉뚱한', '슬픈', '발라드를 좋아하는',
    '짓궂은', '힙합을 좋아하는', '잘 안씻는', '거무튀튀한', '칙칙한',
    '눈이 침침한', '선을 넘는', '나약한', '구릿빛 피부의', '날쌘돌이',
    '허리가 굽은', '선을 보는', '지각한', '털이 수북한', '콧구멍이 큰',
    '시끄러운', '송충이 눈썹', '간이 큰', '더위를 잘 타는', '파도타는',
    '걸걸한', '순간이동하는', '허스키한', '한숨 쉬는', '집이 없는',
    '재미없는', '주정뱅이', '안경 쓴', '상추쌈을 먹는', '술 마시는',
    '인중이 긴', '겨드랑이 털이 수북한', '배불뚝이', '일자눈썹',
    '갓 태어난', '손가락이 예쁜', '손버릇이 나쁜', '늙은', '젊은',
    '어린', '고지식한', '파파걸', '드리프트가 현란한', '파파보이',
    '마마걸', '돈을 훔치는', '마마보이', '손톱 때가 낀', '엄마한테 혼난',
    '눈알이 튀어나온', '햄버거 최대 10개를 먹는', '손이 매운',
    '눈이 충혈된', '자린고비', '카사노바', '땡전 한 푼 없는',
    '팜므파탈', '옴므파탈', '이를 안닦는', '반성하는', '주식을 하는',
    '믿기지 않는', '심심한', '비트코인을 하는', '게으른', '뺨을 맞는',
    '눈이 높은', '볼살이 많은', '다리를 떠는', '불안한', '말년병장',
    '훈련병', '찬물을 끼얹는', '모태솔로', '울고 있는', '엉엉 우는',
    '피아노를 잘 치는', '시간여행을 하는', '치킨 먹는', '복학한',
    '극딜을 넣는', '데이트하는', '분리수거를 하는', '외출을 잘 안하는',
    '이마에 벌레가 붙은', '백덤블링을 하는', '미간을 찌푸린',
    '팔자주름이 깊은', 'YOLO 인생', '걱정하는', '여자친구가 없는',
    '남자친구가 없는', '시간을 멈추는', '올림픽에 출전한', '맨유를 좋아하는',
    '타자가 빠른', '일확천금을 노리는', '먹구름이 짙게 드리운',
    '턱걸이를 하는', '하품을 하는', '쓰러진', '레고를 밟은',
    '앞길이 깜깜한', '덜덜 떠는', '거북목', '말이 없는',
    '파인애플 피자를 좋아하는', '명령하는', '무시하는', '무시받는',
    '잠자는 숲속의', '허우적거리는', '친구가 없는', '이유식을 먹는',
    '턱받이를 한', '야유하는', '끊임없이 먹는', '머리가 떡진'
  ];
  
  if (adj.length > 8) return false;
  return !negativeKeywords.some(keyword => adj.includes(keyword));
});

const combinedPositiveAdjectives = [...new Set([...filteredAdjectives, ...newPositiveAdjectives])];

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
  getRandomNickname: (type) => {
    if (!['animals', 'characters', 'heros', 'monsters'].includes(type)) return;

    const adjective = adjectives[getRandomInteger(adjectives.length)];
    const noun = data[type][getRandomInteger(data[type].length)];

    return `${adjective} ${noun}`;
  },
  
  // 개인 사용 함수
  getPositiveNickname: generatePositiveNickname,
  getFilteredAdjectivesCount: () => combinedPositiveAdjectives.length,
};
