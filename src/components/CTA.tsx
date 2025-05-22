'use client';

import styled from 'styled-components';
import Button from './Button';

const CTARoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; // stretches within parent Panel
  gap: var(--space-lg);
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);

  p {
    color: var(--green-500);
    font-size: var(--font-size-body-xs);
    line-height: var(--line-height-body-xs);
    letter-spacing: var(--letter-spacing-body-xs);
    font-weight: var(--font-weight-body-xs);
    font-style: var(--font-style-body-xs);
    margin: 0;

    @media (min-width: 501px) {
      font-size: var(--font-size-body-l)
    }
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const CTA = () => {
  return (
    <CTARoot>
      <TextBlock>
        <p>Join hundreds of businesses who trust us to offer health insurance that works the way it should: affordable coverage that puts employees and their doctors in the driving seat.</p>
      </TextBlock>

      <ButtonBlock>
        <Button>Get a Custom Quote Today</Button>
      </ButtonBlock>
    </CTARoot>
  );
};

export default CTA;