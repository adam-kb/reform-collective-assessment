import styled, { keyframes } from "styled-components"
import Container from "./Container";
import React from "react";
import Image from "next/image";
import { getClampFrom } from "@/styles/helpers";


const marqueeClampWidth = getClampFrom(327, 607, 501, 1440);
const marqueeClampHeight = getClampFrom(62, 79, 375, 1024);

const marqueeTextNodes = [
  "unpredictable rate increases",
  "lack of transparency",
  "implementation headaches",
  "claim denials",
  "frustrated users",
]

const marqueeTranslateX = keyframes`
  from {
    transform: translateX(0)
  },
  to {
    transform: translateX(-600px)
  }
`;

const MarqueeWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: ${marqueeClampHeight};
  border: 1px solid var(--green-100);
  border-radius: var(--radius-md);
  align-content: center;

  @media (min-width: 501px) {
    width: ${marqueeClampWidth}
  }
`;

const MarqueeTrack = styled.div`
  display: flex;
  gap: 30px;
  white-space: nowrap;
  justify-content: center;
  will-change: transform;
  animation: ${marqueeTranslateX} 20s linear infinite;
`;

const MarqueeItem = styled.span`
  font-size: 12px;
  color: var(--color-accent);
  text-transform: uppercase;
  flex-shrink: 0;
  letter-spacing: 0.1em;
`;

const delimiterStyle = {
  width: '100%',
  height: 'auto',
  maxWidth: '16px'
}

const Marquee = () => {
  return (
    <Container>
      <MarqueeWrapper>
        <MarqueeTrack>
          {marqueeTextNodes && marqueeTextNodes.map((text, i) => (
            <React.Fragment key={i}>
              <MarqueeItem >{text}</MarqueeItem>
              {i < marqueeTextNodes.length - 1 && (
                <Image src={'/marquee-item-delimiter.svg'} alt="Marquee Delimiter" width={16} height={9} style={delimiterStyle} />
              )}
            </React.Fragment>
          ))}
        </MarqueeTrack>
      </MarqueeWrapper>
    </Container>
  );
};

export default Marquee;