'use client';

import styled from 'styled-components';
import { ReactNode, useState } from 'react';
import ArrowIconCircle from './ArrowIconCircle';

type ButtonProps = {
  children: ReactNode;
};

const StyledButton = styled.button`
  display: inline-flex;
  width: 287px;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  &:hover .label {
    transform: translateX(56px);
    color: var(--green-200);
    border-color: var(--green-200);
  }

  &:hover .arrow {
    transform: translateX(-237px);
    color: var(--green-200);
  }
    &:hover path {
      color: var(--green-200);
    }
`;

const ButtonInner = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  position: relative;
  width: 100%;
  overflow: hidden;
  transition: transform 0.3s ease;

`;

const Label = styled.span`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  height: 50px;
  padding: 12px 20px;
  background-color: var(--off-white);
  color: var(--green-400);
  font-family: var(--font-body);
  font-weight: var(--font-weight-body-s);
  font-size: var(--font-size-body-s);
  letter-spacing: -0.03em;

  border: 1px solid var(--green-400);
  border-radius: var(--radius-lg);
  transition: transform 0.3s ease, color 0.5s ease, border-color 0.5s ease;
`;

const Arrow = styled.span`
  position: relative;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
`;

const Button = ({ children }: ButtonProps) => {
  const [arrowTrigger, setArrowTrigger] = useState(false);

  const handleButtonClick = () => {
    setArrowTrigger(true);
    setTimeout(() => setArrowTrigger(false), 1200);
  }

  return (
    <StyledButton onClick={handleButtonClick}>
      <ButtonInner>
        <Label className="label">{children}</Label>
        <Arrow className="arrow">
          <ArrowIconCircle trigger={arrowTrigger} />
        </Arrow>
      </ButtonInner>
    </StyledButton>
  );
};

export default Button;