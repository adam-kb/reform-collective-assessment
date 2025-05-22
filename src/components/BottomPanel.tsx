'use client';

import styled from 'styled-components';
import CTA from './CTA';
import Slider from './Slider';
import Container from './Container';

const PanelWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  border: 1px solid var(--green-100);
  overflow: hidden;
  width: 100%;

  @media (min-width: 501px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
`;

const CTAPanel = styled.div`
  border-top: 1px solid var(--green-100);

  @media (min-width: 501px) {
    grid-column: 1;
    grid-row: 1;
    border-top: none;
    border-right: 1px solid var(--green-100);
  }
`;

const SliderPanel = styled.div`
  @media (max-width: 500px) {
    grid-row: 1; // show this first on mobile
  }

  @media (min-width: 501px) {
    grid-column: 2;
    grid-row: 1;
  }
`;

const PanelContentWrapper = styled.div`
  padding: var(--space-md);

  @media (min-width: 501px) {
    padding: var(--space-xl);
  }
`;

const BottomPanel = () => {
  return (
    <Container>
      <PanelWrapper>
        <SliderPanel>
          <PanelContentWrapper>
            <Slider />
          </PanelContentWrapper>
        </SliderPanel>
        <CTAPanel>
          <PanelContentWrapper>
            <CTA />
          </PanelContentWrapper>
        </CTAPanel>
      </PanelWrapper>
    </Container>
  );
};

export default BottomPanel;