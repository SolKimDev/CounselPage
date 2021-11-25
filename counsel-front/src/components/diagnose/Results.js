export default function getCheckboxResult( type, score ) {
    switch(type) {
        case 'anxiety':
            switch(true) {
                case score < 11 :
                    return {
                        type : 0,
                        title : '정상수준',
                        text : [`나의 불안지수는 ${score}점 입니다.`,
                                '심리적으로 안정되어 있으며, 정상적인 수준의 불안을 경험하고 있습니다.']
                    }
                case (score > 10) && (score < 21) :
                    return {
                        type : 1,
                        title : '경도불안',
                        text : [`나의 불안지수는 ${score}점 입니다.`,
                                '가벼운 불안을 경험하고 있으므로 문제될 것은 없으나, 좀 더 안정을 찾는 방법을 강구해보세요.']
                    }
                case (score > 20) && (score < 31) :
                    return {
                        type : 1,
                        title : '심한 불안',
                        text : [`나의 불안지수는 ${score}점 입니다.`,
                                '상당한 불안을 경험하고 있으므로, 극복을 위해 적극적으로 노력하세요.']
                    }
                case score > 30 :
                    return {
                        type : 2,
                        title : '매우 심한 불안',
                        text : [`나의 불안지수는 ${score}점 입니다.`,
                                '심한 불안상태에 있으므로 전문적인 도움을 받으세요.']
                    }
                default :
                    return {
                        type : 2,
                        title : 'ERROR',
                        text : ['default 구문입니다. 잘못된 루틴에 진입하였습니다.']
                    }
            }
        case 'depression':
            switch(true) {
                case score:
                    return {
                        type : 0,
                        title : 'title',
                        text : [`나의 우울지수는 ${score}점 입니다.`,
                                '계산식 없습니다. 계산식 받으면 데이터를 입력하세요.']
                    }
                default :
                    return {
                        type : 2,
                        title : 'ERROR',
                        text : ['default 구문입니다. 잘못된 루틴에 진입하였습니다.']
                    }
            }
    }
}

export function getType( url ) {
    const splited = url.split('/');
    return splited[splited.length-1];
}