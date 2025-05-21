import { css } from "styled-components";

const ResetStyles = css`
  @layer reset {

    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      -moz-text-size-adjust: none;
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
    }
      
    html,
    body {
      height: 100vh;
      max-width: 100vw;
      overflow-x: hidden;
    }

    ol,
    ul,
    menu,
    summary {
      list-style: none;
    }

    img {
      max-inline-size: 100%;
      max-block-size: 100%;
    }

    table {
      border-collapse: collapse;
    }

    textarea {
      white-space: revert;
    }

    input,
    textarea {
      -webkit-user-select: auto;
    }

    meter {
      -webkit-appearance: revert;
      appearance: revert;
    }

    ::placeholder {
      color: unset;
    }

    :where([hidden]) {
      display: none;
    }

    :where([contenteditable]:not([contenteditable="false"])) {
      -moz-user-modify: read-write;
      -webkit-user-modify: read-write;
      overflow-wrap: break-word;
      -webkit-line-break: after-white-space;
      -webkit-user-select: auto;
    }

    :where([draggable="true"]) {
      -webkit-user-drag: element;
    }

    :where(dialog:modal) {
      all: revert;
      box-sizing: border-box;
    }

    ::-webkit-details-marker {
      display: none;
    }
  }
`;

export default ResetStyles;
