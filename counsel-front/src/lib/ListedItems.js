import Kakao from '../rsrc/icons/NavIcon/Kakao.svg';
import Naver from '../rsrc/icons/NavIcon/Naver.svg';
import Reservation from '../rsrc/icons/NavIcon/Calendar.svg';
import Diagnose from '../rsrc/icons/NavIcon/Diagnose.svg';
import Call from '../rsrc/icons/NavIcon/Phone.svg';

//내비게이션 PC + 태블릿
export const FullItems = [
    {
        icon: Kakao,
        type: "Kakao",
        moveTo: "1",
        text: "카톡 문의"
    },
    {
        icon: Naver,
        type: "Naver",
        moveTo: "2",
        text: "네이버 예약"
    },
    {
        icon: Reservation,
        type: "Reservation",
        moveTo: "3",
        text: "직접 예약"
    },
    {
        icon: Diagnose,
        type: "Diagnose",
        moveTo: "4",
        text: "자가진단"
    },
    {
        icon: Call,
        type: "Call",
        moveTo: "5",
        text: "전화상담"
    },
]

//내비게이션 모바일
export const MobileItems = [
    {
        icon: Call,
        type: "Call",
        moveTo: "11",
        text: "전화상담"
    },{
        icon: Kakao,
        type: "Kakao",
        moveTo: "22",
        text: "카톡 문의"
    },
    {
        icon: Naver,
        type: "Naver",
        moveTo: "33",
        text: "네이버 예약"
    },
    {
        icon: Reservation,
        type: "Reservation",
        moveTo: "44",
        text: "직접 예약"
    }
]

//헤더 드롭다운 첫번째(센터 안내)
export const Dropdown_01 = [
    {
        text: "인사말",
        to: "111"
    },
    {
        text: "센터 소개",
        to: "222"
    },
    {
        text: "오시는 길",
        to: "333"
    },
];

//헤더 드롭다운 두번째(게시판)
export const Dropdown_02 = [
    {
        text: "공지",
        to: "1111"
    },
    {
        text: "이벤트",
        to: "2222"
    },
    {
        text: "문의사항",
        to: "3333"
    },
    {
        text: "미디어",
        to: "4444"
    },
];

//헤더 드롭다운 세번째(자가진단)
export const Dropdown_03 = [
    {
        text: "스트레스",
        to: "11111"
    },
    {
        text: "우울",
        to: "22222"
    },
    {
        text: "중독",
        to: "33333"
    },
    {
        text: "운영 프로그램",
        to: "44444"
    },
    {
        text: "상담 프로세스",
        to: "55555"
    },
    {
        text: "QnA",
        to: "66666"
    },
];


//********************** 자가진단 검사표 데이터 **********************/

export const Data_Alcohol = [
    {
        question: "술은 얼마나 자주 마십니까?",
        a1: "전혀 마시지 않는다",
        a2: "≤월 1회",
        a3: "월 2~4회",
        a4: "주 1회",
        a5: "≥주 4회"
    },
    {
        question: "평소 술을 마시는 날 몇 잔 정도나 마십니까?",
        a1: "1~2잔",
        a2: "3~4잔",
        a3: "5~6잔",
        a4: "7~9잔",
        a5: "10잔+"
    },
    {
        question: "한 번 술을 마실 때 소주 1병 또는 맥주 4병 이상 마시는 음주는 얼마나 자주 하십니까?",
        a1: "전혀 없다",
        a2: "＜월 1회",
        a3: "월 1회",
        a4: "주 1회",
        a5: "매번"
    },
    {
        question: "지난 1년간, 술을 한 번 마시기 시작하면 멈출 수 없었던 때가 얼마나 자주 있었습니까?",
        a1: "전혀 없다",
        a2: "＜월 1회",
        a3: "월 1회",
        a4: "주 1회",
        a5: "매번"
    },
    {
        question: "지난 1년간, 당신은 평소 할 수 있었던 일을 음주 때문에 실패한 적이 얼마나 자주 있었습니까?",
        a1: "전혀 없다",
        a2: "＜월 1회",
        a3: "월 1회",
        a4: "주 1회",
        a5: "매번"
    },
    {
        question: "지난 1년간, 술 마신 다음날 아침에 다시 해장술이 필요했던 적이 얼마나 자주 있었습니까?",
        a1: "전혀 없다",
        a2: "＜월 1회",
        a3: "월 1회",
        a4: "주 1회",
        a5: "매번"
    },
    {
        question: "지난 1년간, 음주 후에 죄책감이 들거나 후회를 한 적이 얼마나 자주 있었습니까?",
        a1: "전혀 없다",
        a2: "＜월 1회",
        a3: "월 1회",
        a4: "주 1회",
        a5: "매번"
    },
    {
        question: "지난 1년간, 음주 때문에 전날 밤에 있었던 일이 기억이 나지 않았던 적이 얼마나 자주 있었습니까?",
        a1: "전혀 없다",
        a2: "＜월 1회",
        a3: "월 1회",
        a4: "주 1회",
        a5: "매번"
    },
    {
        question: "음주로 인해 자신이나 다른 사람이 다친 적이 있었습니까?",
        a1: "없었다",
        a3: "지난 1년 간에는 없었다",
        a5: "지난 1년 내에 있었다",
        resize: true
    },
    {
        question: "친척이나 친구, 또는 의사가 당신이 술 마시는 것을 걱정하거나 술 끊기를 권유한 적이 있었습니까?",
        a1: "없었다",
        a3: "지난 1년 간에는 없었다",
        a5: "지난 1년 내에 있었다",
        resize: true
    },
]

export const Data_Depression = [
    ['문항 내용','1일 이하','1~2일','3~4일','5~7일'],
    [
        {text:'평소에는 아무렇지도 않던 일들이 귀찮게 느껴졌다.'},
        {text:'먹고 싶지 않았다. 입맛이 없었다.'},
        {text:'가족이나 친구가 도와주더라도 울적한 기분을 떨쳐 버릴 수 없었다.'},
        {text:'다른 사람들만큼 능력이 있다고 느꼈다.', reverse:true},

        {text:'무슨 일을 하든 정신을 집중하기가 힘들었다.'},
        {text:'우울했다.'},
        {text:'하는 일마다 힘들게 느껴졌다.'},
        {text:'미래에 대하여 희망적이라고 느꼈다.', reverse:true},
        
        {text:'내 인생은 실패작이라는 생각이 들었다.'},
        {text:'두려움을 느꼈다.'},
        {text:'잠을 설쳤다. 잠을 잘 이루지 못했다.'},
        {text:'행복했다.', reverse:true},

        {text:'평소보다 말을 적게 했다. 말수가 줄었다.'},
        {text:'세상에 홀로 있는 듯한 외로움을 느꼈다.'},
        {text:'사람들이 나에게 차갑게 대하는 것 같았다.'},
        {text:'생활이 즐거웠다.', reverse:true},

        {text:'갑자기 울음이 나왔다.'},
        {text:'슬픔을 느꼈다.'},
        {text:'사람들이 나를 싫어하는 것 같았다.'},
        {text:'도무지 무엇을 시작할 기운이 나지 않았다.'},
    ]
]

export const Data_Anxiety = {
    title:  ['나는 지난 1달동안...','전혀 아니다','조금 느꼈다','상당히 느꼈다','심하게 느꼈다'],
    items: [
        {text:'매사 불안하다.'},
        {text:'심장이 두근거린다.'},
        {text:'긴장한다.'},
        {text:'별 것 아닌 것에 신경쓰인다.'},

        {text:'가만히 있지를 못하겠다.'},
        {text:'불안을 떨치는 어떤 행위나 대상에 집착한다.'},
        {text:'일이 잘못될 것 같다.'},
        {text:'뒷 목이 당긴다.'},
        
        {text:'누구라도 불안을 느낄만한 그런 상황에 있다.'},
        {text:'세상이 어수선하다.'},
        {text:'손발이 떨린다.'},
        {text:'불안을 느낄 분명한 이유가 있다.'},

        {text:'불필요한 생각이 든다.'},
        {text:'호흡이 답답하고 숨이 가쁘다.'},
        {text:'내가 느끼는 불안은 독특한 특성이 있다.'},
        {text:'무슨 일이 일어날 것만 같다.'},

        {text:'땀을 흘린다.'},
        {text:'남들은 별로 불안해보이지 않는다.'},
        {text:'괜한 일에도 걱정한다.'},
        {text:'손발이나 몸이 쉽게 차거나 뜨겁다.'},

        {text:'공포감이나 두려움을 느낀다.'},
    ]
}