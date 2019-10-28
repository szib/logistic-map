import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #555;
  box-sizing: border-box;
  background-color: ${props => props.bgColor};
  border-radius: 3px;
  color: #aaa;
`;

const Square = ({ distance, clickHandler, color }) => {
  return (
    <Wrapper bgColor={color} onClick={clickHandler}>
      {distance === 0 ? `🍺` : distance}
    </Wrapper>
  );
};
export default Square;
