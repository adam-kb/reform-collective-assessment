import { createGlobalStyle } from "styled-components";

import ResetStyles from "./reset";
import { getClamp } from "./helpers";

const radiusClamp = getClamp(6, 12, 1024);

const GlobalStyle = createGlobalStyle`
  ${ResetStyles}
  
  :root {
    /* Typography */
    --font-body: var(--font-soehne);

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
  }

  html, body {
    font-family: var(--font-body);
    font-weight: 400;
    color: var(--color-text);
  }
`;

export default GlobalStyle;
