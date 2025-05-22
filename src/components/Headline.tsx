'use client'

import styled from "styled-components";
import Marquee from "./Marquee";

import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import { useGSAP } from "@gsap/react";
import { globalTimeline } from "@/lib/animations/globalTimeline";
import { getClampFrom } from "@/styles/helpers";

const clampTopSpacing = getClampFrom(156, 260, 1440, 1024);
const clampBottomSpacing = getClampFrom(102, 186, 1440, 1024);

const HeadlineBlock = styled.section`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 392px;
    overflow: hidden;
    text-align: center;
    width: auto;
  }

  @media (min-width: 501px) {
    height: auto;
    display: block;
    margin-top: ${clampTopSpacing};
    margin-bottom: ${clampBottomSpacing};
    // padding-left: var(--gutter-tablet);
    // padding-right: var(--gutter-tablet);
  }

  // @media (min-width: 1025px) {
  //   padding-left: var(--gutter-desktop);
  //   padding-right: var(--gutter-desktop);
  // }
`;

const Title = styled.h1`
  font-size: var(--font-size-h1);
  letter-spacing: var(--letter-spacing-h1);
  font-weight: var(--font-weight-h1);
  font-style: var(--font-style-h1);
  line-height: var(--line-height-h1);
  text-align: center;
  color:  var(--green-500);
  padding: 0 var(--space-sm);

  @media (min-width: 501px) {
    line-height: 0.95;
    padding-left: var(--gutter-tablet);
    padding-right: var(--gutter-tablet);
  }

  @media (min-width: 1025px) {
    padding-left: 0;
    padding-right: 0;
  }
`
const Emphasis = styled.span``

const Headline = () => {
  const isMobile = useMediaQuery('(max-width: 500px)');
  const [mounted, setMounted] = useState(false);
  const emphasisRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!emphasisRef.current) return;

    const spans = emphasisRef.current.querySelectorAll('.headline-emphasis > span:not(.marquee-wrapper)');

    globalTimeline.addLabel('emphasize-headline', 3.2);

    globalTimeline.to(spans, {
      color: '#00b684',
      fontStyle: 'italic',
      duration: 1,
    }, 'emphasize-headline');
  }, [mounted]);

  if (!mounted) return null;

  return (
    <HeadlineBlock>
      {isMobile ? (
        <Title className="title"><span>Health insurance that </span><Emphasis className="headline-emphasis" ref={emphasisRef}><span>doesn&apos;t get</span><span><Marquee /></span> <span>in the way.</span></Emphasis></Title>
      ) : (
        <Title className="title"><span>Health&nbsp;insurance that </span><Emphasis className="headline-emphasis" ref={emphasisRef}><span>doesn&apos;t<br/>get&nbsp;in</span><span><Marquee /></span><span> the way.</span></Emphasis></Title>
      )}

    </HeadlineBlock>
  )
}

export default Headline;
