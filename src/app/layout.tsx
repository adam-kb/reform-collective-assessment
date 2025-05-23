import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import StyledRoot from './StyledRoot';

import { soehne, soehneMono } from '@/fonts/fonts';

export const metadata: Metadata = {
  title: "Reform Collective Assessment",
  description: "Health Insurance that doesn't get in the way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${soehne.variable} ${soehneMono.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <StyledRoot>{children}</StyledRoot>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
