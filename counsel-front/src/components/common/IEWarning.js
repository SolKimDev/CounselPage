import React, { useState } from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import palette from '../../lib/styles/palette';
import WarningIcon from '../../rsrc/icons/warningicon-small.svg';
import CloseIcon from '../../rsrc/icons/closeicon-small.svg'

const WarningBlock = styled(Responsive)`
    width: 100%;
    position: fixed;
    display: ${ props => props.isVisible ? "flex" : "none" };
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    font-size: 0.833em;
    background-color: #FDCAD9;
    height: 3rem;
`;

const LeftElementBlock = styled.div`
    display: flex;
    align-items: center;
`;

const CloseButtonBlock = styled.button`
    border: none;
    width: 100px;
    height: 36px;
    border-radius: 1.125rem;
    background-color: #F17A9E;
    color: white;
    font-size: 1rem;
    font-weight:600;
    
    &:hover {
        background-color: #F9A1BB;
        color: ${palette.Font[2]};
    }

    cursor: pointer;
`;

const ButtonContentsWrapper = styled.div`
    margin-left: 16px;
    display: flex;
    align-items: center;
`;

const Spacer = styled.div`
    height: ${ props => props.isVisible ? "3rem" : "0" };
`;

const StyleWarningIcon = {
    width: "25px",
    height: "25px",
    margin: "0.15em 0.938em 0 0"
}

const StyleCloseIcon = {
    width: "20px",
    height: "20px",
    margin: "0.1rem 0.5rem 0 0"
}

const IEWarning = () => {
    const [isVisible, setIsVisible] = useState(true);
    const closeBanner = () => {
        setIsVisible(false);
    }
  return (
      <>
        <WarningBlock isVisible={ isVisible }>
            <LeftElementBlock>
                <img src={ WarningIcon } style={ StyleWarningIcon } alt="warningIcon"/>이 페이지는 Internet Explorer 이용을 권장하지 않습니다. IE 이외의 브라우저를 이용해 주세요.
            </LeftElementBlock>
            <CloseButtonBlock onClick={ closeBanner }>
                <ButtonContentsWrapper>
                    <img src={ CloseIcon } style={ StyleCloseIcon } className="closeIcon" alt="closeIcon"/>닫기
                </ButtonContentsWrapper>
            </CloseButtonBlock>
        </WarningBlock>
        <Spacer isVisible={ isVisible }/>
      </>
  );
};

export default IEWarning;
