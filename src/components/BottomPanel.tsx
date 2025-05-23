'use client';

import styled from 'styled-components';
import CTA from './CTA';
import Slider from './Slider';
import Container from './Container';
import { SliderStyles } from '@/styles/SliderStyles';

const PanelWrapper = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--green-100);
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;

  @media (min-width: 501px) {
    flex-direction: row;
  }
`;

const SliderPanel = styled.div`
  order: -1; // puts slider first on mobile

  @media (min-width: 501px) {
    width: 58.33%;
    order: 1;
    max-height: 600px;
  }
  @media (min-width: 1025px) {
    width: 50%;
  }
`;

const CTAPanel = styled.div`
  border-top: 1px solid var(--green-100);

  @media (min-width: 501px) {
    border-top: none;
    border-right: 1px solid var(--green-100);
    width: 41.666%; // 5/12
  }

  @media (min-width: 1025px) {
    width: 50%;
  }
`;

const PanelContentWrapper = styled.div`
  padding: var(--space-md);

  @media (min-width: 501px) {
    padding: var(--space-xl);
    height: 100%;
  }
`;

const SliderWrapper = styled.div`
  ${SliderStyles};

  width: 100%;
  overflow-x: auto;
  display: block;
`;

const noMargin = {
  margin: '0',
  padding: '0',
};

const BottomPanel = () => {
  return (
    <Container>
      <PanelWrapper>
        <SliderPanel>
          <PanelContentWrapper style={noMargin}>
            <SliderWrapper>
              <Slider />
            </SliderWrapper>
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
