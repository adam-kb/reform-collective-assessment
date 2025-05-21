import localFont from "next/font/local";

// TODO: After all pages/components are built, remove unused font weights/styles from this list.
export const soehne = localFont({
  src: [
    { path: "./Soehne/soehne-buch.woff2", weight: "400", style: "normal" },
    {
      path: "./Soehne/soehne-buch-kursiv.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Soehne/soehne-dreiviertelfett.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Soehne/soehne-dreiviertelfett-kursiv.woff2",
      weight: "600",
      style: "italic",
    },
    { path: "./Soehne/soehne-extrafett.woff2", weight: "800", style: "normal" },
    {
      path: "./Soehne/soehne-extrafett-kursiv.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "./Soehne/soehne-extraleicht.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./Soehne/soehne-extraleicht-kursiv.woff2",
      weight: "200",
      style: "italic",
    },
    { path: "./Soehne/soehne-fett.woff2", weight: "700", style: "normal" },
    {
      path: "./Soehne/soehne-fett-kursiv.woff2",
      weight: "700",
      style: "italic",
    },
    { path: "./Soehne/soehne-halbfett.woff2", weight: "500", style: "normal" },
    {
      path: "./Soehne/soehne-halbfett-kursiv.woff2",
      weight: "500",
      style: "italic",
    },
    { path: "./Soehne/soehne-kraftig.woff2", weight: "900", style: "normal" },
    {
      path: "./Soehne/soehne-kraftig-kursiv.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "./Soehne/soehne-leicht-kursiv.woff2",
      weight: "300",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-soehne",
  preload: true,
});
