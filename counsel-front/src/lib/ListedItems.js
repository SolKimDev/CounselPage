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