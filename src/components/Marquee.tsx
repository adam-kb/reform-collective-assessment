'use client';

import styled, { keyframes } from "styled-components";
import Container from "./Container";
import React from "react";
import Image from "next/image";
import { getClampFrom } from "@/styles/helpers";

import { useGSAP } from "@gsap/react";
import { globalTimeline } from "@/lib/animations/globalTimeline";

const marqueeClampWidth = getClampFrom(327, 607, 501, 1440);
const marqueeClampHeight = getClampFrom(62, 79, 375, 1024);

const InlineContainer = styled(Container)`
  @media (min-width: 501px) {
    width: auto;
    display: inline-block;
    padding-left: 0;
    padding-right: 0;
    vertical-align: middle;
  }
`;

const marqueeTextNodes = [
  "unpredictable rate increases",
  "lack of transparency",
  "implementation headaches",
  "claim denials",
  "frustrated users",
];

const marqueeTranslateX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-600px);
  }
`;

const MarqueeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  overflow: hidden;
  max-width: 100%;

  width: 100%;
  height: ${marqueeClampHeight};
  margin: 0 auto;
  
  border: 1px solid var(--green-100);
  border-radius: var(--radius-md);
  
  @media (min-width: 501px) {
    width: ${marqueeClampWidth};
    margin-left: 10px;
    max-width: 300px;
  }
  @media (min-width: 1025px) {
    max-width: 662px;
  }
`;

const InnerContent = styled.div`
  display: flex;
  gap: 30px;
  white-space: nowrap;
  max-width: 100%;
  min-width:
  justify-content: center;
  align-items: flex-end;
  will-change: transform;
  animation: ${marqueeTranslateX} 20s linear infinite;
  min-width: 0;
`;

const MarqueeItem = styled.span`
  font-size: 12px;
  color: var(--color-accent);
  text-transform: uppercase;
  flex-shrink: 0;
  letter-spacing: 0.1em;
`;

const delimiterStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  maxWidth: '16px',
  position: 'relative',
  top: '-2px'
};

const Marquee = () => {
  useGSAP(() => {
    globalTimeline.addLabel('collapseMarquee', 0.82);

    globalTimeline.to('.marquee-wrapper', {
      width: 0,
      height: 0,
      duration: 2.92,
      ease: 'expo.in',
      clearProps: 'width',
    }, 'collapseMarquee');

    globalTimeline.set('.marquee-wrapper', {
      display: 'none',
    }, 'collapseMarquee+=2.92');

    globalTimeline.to('.inner-content', {
      height: 225,
      duration: 5.92,
      ease: 'expo.in',
    }, 'collapseMarquee');
  }, []);

  return (
    <InlineContainer className="marquee-container">
      <MarqueeWrapper className="marquee-wrapper">
        <InnerContent className="inner-content">
          {marqueeTextNodes.map((text, i) => (
            <React.Fragment key={i}>
              <MarqueeItem>{text}</MarqueeItem>
              {i < marqueeTextNodes.length - 1 && (
                <Image
                  src="/marquee-item-delimiter.svg"
                  alt="Marquee Delimiter"
                  width={16}
                  height={9}
                  style={delimiterStyle}
                />
              )}
            </React.Fragment>
          ))}
        </InnerContent>
      </MarqueeWrapper>
    </InlineContainer>
  );
};

export default Marquee;