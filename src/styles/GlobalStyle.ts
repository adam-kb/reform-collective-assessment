import { createGlobalStyle } from "styled-components";

import ResetStyles from "./reset";
import { getClamp, getClampFrom } from "./helpers";

const h1Clamp = getClampFrom(48, 112, 375, 960);
const radiusClamp = getClamp(6, 12, 1024);

const GlobalStyle = createGlobalStyle`
  ${ResetStyles}
  
  :root {
    /* Typography */
    --font-body: var(--font-soehne);

    /* Typography - Headings */
    --font-size-h1: ${h1Clamp};
    --letter-spacing-h1: -0.03em;
    --line-height-h1: 1.2;
    --font-weight-h1: 400;
    --font-style-h1: normal;

    /* Colors – Neutrals */
    --black-200: #081e13;
    --black-100: #112c2e;
    --off-white: #fbfaf6;
    --white: #ffffff;

    /* Colors – Primary Greens */
    --green-500: #153e2a;
    --green-400: #30715d;
    --green-300: #6e9e8f;
    --green-200: #00b684;
    --green-100: #ccddc7;

    /* Accent */
    --orange-accent: #d87906;

    /* Semantic Aliases */
    --color-text: var(--black-200);
    --color-bg: var(--off-white);
    --color-accent: var(--orange-accent);
    --color-muted: var(--green-100);

    /* Borders */
    --radius-sm: 6px;
    --radius-md: 12px;
    --radius-max: 100%; //completely rounded
    --radius-scale: ${radiusClamp}

    /* Layout/Content */
    --max-layout-width: 1440px;
    --max-content-width: 1376px;

    --gutter-mobile: 24px;
    --gutter-tablet: 32px;
    --gutter-desktop: 32px;

    /* Utility spacing (cards, UI, internal blocks) */
    --space-xs: 6px;
    --space-md: 12px;
    --space-md: 20px;
    --space-lg: 24px;
    --space-xl: 32px;
  }

  html, body {
    font-family: var(--font-body);
    font-weight: 400;
    background-color: var(--off-white);
    color: var(--color-text);
  }

  main {
    max-width: var(--max-content-width);
    margin-left: auto;
    margin-right: auto;
  }
`;

export default GlobalStyle;
