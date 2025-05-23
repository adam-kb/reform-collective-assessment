'use client';

import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const CircleIcon = styled.svg`
  width: 50px;
  height: 50px;
  display: block;
  color: var(--green-400);
  cursor: pointer;
`;

type ArrowIconCircleProps = {
  trigger: boolean;
};

const ArrowIconCircle = ({trigger}: ArrowIconCircleProps) => {
  const arrowRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!trigger || !arrowRef.current) return;

    const tl = gsap.timeline();

    tl.to(arrowRef.current, {
      x: 32,
      duration: 0.3,
      ease: 'power1.in',
    })
      .set(arrowRef.current, { x: -32 })
      .to(arrowRef.current, {
        x: 0,
        duration: 0.3,
        ease: 'power1.out',
      });
  }, [trigger]);

  return (
    <CircleIcon
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring path */}
      <path
        d="M11.4227 5.6875C15.5263 2.73737 20.5603 1 26 1C39.8071 1 51 12.1929 51 26C51 39.8071 39.8071 51 26 51C12.1929 51 1 39.8071 1 26C1 23.8419 1.27346 21.7476 1.78761 19.75"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Clipped region — 14x14 positioned at center of circle */}
      <g transform="translate(19, 19)">
        <g clipPath="url(#arrowClip)">
          <g ref={arrowRef}>
            <path
              d="M7.24857 13.25L13.4986 7M13.4986 7L7.24857 0.75M13.4986 7H1"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeLinecap="round"
            />
          </g>
        </g>
      </g>

      <defs>
        <clipPath id="arrowClip">
          <rect width="14" height="14" x="0" y="0" />
        </clipPath>
      </defs>
    </CircleIcon>
  );
};

export default ArrowIconCircle;
