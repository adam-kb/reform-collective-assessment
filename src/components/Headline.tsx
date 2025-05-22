'use client'

import styled from "styled-components";
import Marquee from "./Marquee";

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
  }

  @media (min-width: 1025px) {
    padding: 0;
  }
`
const Emphasis = styled.span`
  color: var(--green-200);
  font-style: italic;
`

const Headline = () => {
  return (
    <>
      <Title>Health insurance that <Emphasis>doesn&apos;t get in the way</Emphasis></Title>
      <Marquee />
    </>
  )
}

export default Headline;
