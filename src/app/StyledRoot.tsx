'use client';

import GlobalStyle from '@/styles/GlobalStyle';

export default function StyledRoot({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
