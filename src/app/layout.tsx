import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import StyledRoot from './StyledRoot';

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
    <html>
      <body>
        <StyledComponentsRegistry>
          <StyledRoot>{children}</StyledRoot>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
