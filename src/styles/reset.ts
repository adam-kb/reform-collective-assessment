import { css } from "styled-components";

const ResetStyles = css`
  @layer reset {
    :where(abbr, address, area, article, aside, audio, b, base, bdi, bdo, big,
      blockquote, body, br, caption, cite, code, col, colgroup, data, datalist,
      dd, del, details, dfn, dialog, div, dl, dt, em, embed, fieldset, figcaption,
      figure, footer, form, h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, i,
      input, ins, kbd, keygen, label, legend, li, link, main, map, mark, menu,
      menuitem, meta, meter, nav, object, ol, optgroup, option, output, p, param,
      picture, pre, progress, q, rp, rt, ruby, s, samp, script, section, select,
      small, source, span, strong, style, sub, summary, sup, table, tbody, td,
      template, textarea, tfoot, th, thead, time, title, tr, track, u, ul, var,
      video, wbr, button, a) {
      all: unset;
      display: revert;
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    html {
      -moz-text-size-adjust: none;
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
    }
      
    html,
    body {
      max-width: 100vw;
      overflow-x: hidden;
    }

    a,
    button {
      cursor: revert;
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
