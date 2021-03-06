import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import PhoneIcon from '../../rsrc/icons/NavIcon/Phone_InForm.svg';
import CloseIcon from '../../rsrc/icons/NavIcon/CloseIcon.svg';
import palette from '../../lib/styles/palette';
import LineButton from './LineButton';

const ApplicationBlock = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2.5rem;
    margin-left: 1.875rem;
    width: 37.188rem;
`;

const StyledCloseIcon = styled(SVG)`
    width: 1.563rem;
    height: 1.563rem;

    cursor: pointer;

    &:hover .st0 {
        stroke: black;
    }
`;

const StyledPhoneIcon = styled.img`
    width: 3rem;
    height: 2.75rem;
    margin-right: 0.938rem;
`;

const ContentWrap = styled.div`

`;

const TitleBlock = styled.div`
    margin-bottom: 3.75rem;
`;

const MainTitleBlock = styled.div`
    display: flex;
    align-items: center;
    font-size: 2em;
    font-weight: 500;
`;

const SubTitleBlock = styled.div`
    font-weight: 300;
    font-size: 0.833em;
`;

const FormBlock = styled.form`
    label {
        min-width: 1.5rem;
        margin-right: 1.75rem;
        font-weight: 400;
    }
    input {
        height: 2.25em;
    }
    select {
        height: 2.25em;
    }
`;

const InputBlock = styled.div`
    display: flex;
    margin-bottom: 1.875rem;
`;

const CallTimeDescription = styled.small`
    font-size: 0.625em;
    font-weight: 300;
    color: ${palette.Font[0]};
    display: block;
    margin-bottom: 1.875rem;
`;

const BottomWrapper = styled.div`
    width: 100%;
    text-align: center;
    padding-left: 2.5rem;
`;

const TextBlock = styled.div`
    display: flex;
    font-size: 0.75em;
    align-items: center;
    justify-content: center;
    padding-top: 1.25rem;

    input {
        width: 1rem;
        height: 1rem;
        margin-right: 0.625rem;
    }

    span {
        font-weight: bold;
        color: #1273F2;
        text-decoration: none;

        cursor: pointer;
    }
`;

const SelectStyle = {
    "minWidth" : "4rem"
}

const ApplicationForm = ({ closeApplication }) => {
    
    let time = [];
    for(let i=0; i<24; i++) (i<10) ? time.push('0' + String(i)+'???') : time.push(String(i)+'???')

    let minute = [];
    for(let i=0; i<51; i=i+10) (i<10) ? minute.push('0' + String(i)+'???') : minute.push(String(i)+'???')

    const openPopup = () => {
        window.open('/popups/policy', '????????????????????????', 'width=500, height=650, scrollbars=yes, toolbar=no, resizable=no');
        return false;
    }

    return (
        <ApplicationBlock>
            <ContentWrap>
                <TitleBlock>
                        <MainTitleBlock>
                            <StyledPhoneIcon src={PhoneIcon} />
                            ??????????????????
                        </MainTitleBlock>
                        <SubTitleBlock>??????????????? ??????????????? ???????????? ????????? ????????? ????????????.</SubTitleBlock>
                </TitleBlock>
                <FormBlock>
                    <InputBlock><label>??????* ( ?????? ??? ?????? )</label><input type="text" id="name" size="20" required/></InputBlock>
                    <InputBlock><label>?????????*</label><input type="tel" id="tel1" size="6" required/>&nbsp;-&nbsp;<input type="tel" id="tel2" size="8" required/>&nbsp;-&nbsp;<input type="tel" id="tel3" size="8" required/></InputBlock>
                    <InputBlock style={{marginBottom:"0rem"}}><label>????????????</label>
                            
                            <select size="1" id="time1" style={SelectStyle}>
                            <option>??????</option>
                            {time.map((time, index) => (
                                <option key={index}>{time}</option>
                            ))}</select>&nbsp;:&nbsp;

                            <select size="1" id="minute1" style={SelectStyle}>
                                <option>???</option>
                                {minute.map((minute, index) => (
                                    <option key={index}>{minute}</option>
                                ))}</select>&nbsp;&nbsp;~&nbsp;&nbsp;

                            <select size="1" id="time2" style={SelectStyle}>
                            <option>??????</option>
                            {time.map((time, index) => (
                                <option key={index}>{time}</option>
                            ))}</select>&nbsp;:&nbsp;

                            <select size="1" id="minute2" style={SelectStyle}>
                            <option>???</option>
                            {minute.map((minute, index) => (
                                <option key={index}>{minute}</option>
                            ))}</select>

                            </InputBlock>
                        <CallTimeDescription>????????????????????? ???????????? ???????????? ?????? ????????????, ????????? ????????? ??? ????????????.</CallTimeDescription>
                        <InputBlock style={{marginBottom:"5rem"}}><label>????????????</label><textarea cols="40" rows="10"></textarea></InputBlock>
                        <BottomWrapper>
                            <LineButton blue>??????????????????</LineButton>
                            <TextBlock>
                                <input type="checkbox" id="policy" required /><span onClick={openPopup}>????????????????????????</span>??? ???????????????, ?????? ???????????????.
                            </TextBlock>
                        </BottomWrapper>
                </FormBlock>
            </ContentWrap>
            <StyledCloseIcon src={CloseIcon} onClick={closeApplication}/>
        </ApplicationBlock>
    );
};

export default ApplicationForm;