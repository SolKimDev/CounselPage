export default function getCheckboxResult(type, score) {
  switch (type) {
    case 'anxiety':
      switch (true) {
        case score < 11:
          return {
            type: 0,
            title: '정상수준',
            text: [
              `나의 불안지수는 ${score}점 입니다.`,
              '심리적으로 안정되어 있으며, 정상적인 수준의 불안을 경험하고 있습니다.',
            ],
          };
        case score > 10 && score < 21:
          return {
            type: 1,
            title: '경도불안',
            text: [
              `나의 불안지수는 ${score}점 입니다.`,
              '가벼운 불안을 경험하고 있으므로 문제될 것은 없으나, 좀 더 안정을 찾는 방법을 강구해보세요.',
            ],
          };
        case score > 20 && score < 31:
          return {
            type: 1,
            title: '심한 불안',
            text: [
              `나의 불안지수는 ${score}점 입니다.`,
              '상당한 불안을 경험하고 있으므로, 극복을 위해 적극적으로 노력하세요.',
            ],
          };
        case score > 30:
          return {
            type: 2,
            title: '매우 심한 불안',
            text: [
              `나의 불안지수는 ${score}점 입니다.`,
              '심한 불안상태에 있으므로 전문적인 도움을 받으세요.',
            ],
          };
        default:
          return {
            type: 2,
            title: 'ERROR',
            text: ['default 구문입니다. 잘못된 루틴에 진입하였습니다.'],
          };
      }
    case 'depression':
      switch (true) {
        case score < 16:
          return {
            type: 0,
            title: '정상수준',
            text: [
              `나의 우울지수는 ${score}점 입니다.`,
              '평균적인 사람들이 경험하는 수준의 우울을 느끼고 있습니다.',
            ],
          };
        case score > 15 && score < 21:
          return {
            type: 1,
            title: '경증도 우울',
            text: [
              `나의 우울지수는 ${score}점 입니다.`,
              '최근 들어 우울하다고 느낄 수 있습니다. 아래의 완화법을 활용해보세요',
              '내가 우울하다는 사실을 깨닫기',
              '마음을 터놓을 수 있는 사람과 나의 상태에 대해서 이야기 나누기',
              '하루 20분, 햇빛을 쬐면서 산책하기',
              '방 구조를 바꾸거나 미용실을 가는 등, 사소한 것부터 새롭게 환경을 개선하기',
              '운동하기',
              '하고 싶은 일 1-2개를 정해 조금이라도 계획해보기',
              '우울감 회복에 좋은 음식 먹기 : 초콜릿, 상추, 우유, 녹차, 커피, 연어 등',
              "'우울하지 말아야 한다'는 생각에서 벗어나 스스로를 기다려주기"
            ],
          };
        case score > 20 && score < 25:
            return {
                type: 2,
                title: '심한 수준의 우울',
                text: [
                    `나의 우울지수는 ${score}점 입니다.`,
                    '스스로 감당하기 어려운 수준의 우울감을 경험하고 있습니다.',
                    '전문적인 도움을 요청해 보세요'
                ],
            }
        case score > 24:
            return {
                type: 2,
                title: '매우 심한 우울',
                text: [
                    `나의 우울지수는 ${score}점 입니다.`,
                    '우울감으로 인해 일상생활에 영향을 줄 수 있습니다.',
                    '전문적인 도움이 반드시 필요합니다.'
                ]
            }
        default:
          return {
            type: 2,
            title: 'ERROR',
            text: ['default 구문입니다. 잘못된 루틴에 진입하였습니다.'],
          };
      }
  }
}

export function getType(url) {
  const splited = url.split('/');
  return splited[splited.length - 1];
}
