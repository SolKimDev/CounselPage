import React from "react";

import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { rem } from "polished";

const Inputbox = ({ isPassword, isEmpty, value, setValue }) => {
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Label>
      {isPassword ? "Password" : "Admin ID"}
      <StyledInput
        type={isPassword ? "password" : "text"}
        isEmpty={isEmpty}
        value={value}
        onChange={onChange}
      />
    </Label>
  );
};

export default Inputbox;

const Label = styled.label`
  display: flex;
  font-size: ${rem(32)};
  font-weight: 500;
  align-items: flex-end;
  justify-content: space-between;

  margin-bottom: ${rem(32)};
  padding: 0 ${rem(24)};
`;

const StyledInput = styled.input`
  width: ${rem(536)};
  height: ${rem(49)};

  border: none;
  border-bottom: 1px solid
    ${(props) => (props.isEmpty ? palette.Alert : palette.Line[0])};
  &:focus {
    outline: none;
  }

  font-size: ${rem(20)};

  background-color: ${palette.BG[0]};
`;
