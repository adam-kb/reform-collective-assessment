import localFont from "next/font/local";

export const soehne = localFont({
  src: [
    { path: "./Soehne/soehne-buch.woff2", weight: "400", style: "normal" },
    {
      path: "./Soehne/soehne-buch-kursiv.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-soehne",
  preload: true,
});

export const soehneMono = localFont({
  src: [
    {
      path: "./Soehne/soehne-mono-buch.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-soehne-mono",
  preload: true,
});
