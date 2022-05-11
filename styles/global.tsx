import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    line-height: 1.15;
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
    font-family: 'Open Sans', sans-serif;
  }

  /* Turn on custom 3px wide scrollbar */
  ::-webkit-scrollbar {
    width: 0.5px; /* 1px wider than Lion. */
    height: 0.5px; /* 1px wider than Lion. */
    background-color: rgba(0,0,0,0);
    -webkit-border-radius: 50%;
    -webkit-appearance: none;
  }
  /* hover effect for both scrollbar area, and scrollbar 'thumb' */
  ::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.09);
  }

  /* The scrollbar 'thumb' ...that marque oval shape in a scrollbar */
  ::-webkit-scrollbar-thumb:vertical {
    background: #EFF0F2;
    -webkit-border-radius: 50%;
  }
  ::-webkit-scrollbar-thumb:vertical:active {
    background: rgba(0,0,0,0.61); /* Some darker color when you click it */
    -webkit-border-radius: 50%;
  }
  /* The scrollbar 'thumb' ...that marque oval shape in a scrollbar */
  ::-webkit-scrollbar-thumb:horizontal {
    background: #EFF0F2;
    -webkit-border-radius: 50%;
  }
  ::-webkit-scrollbar-thumb:horizontal:active {
    background: rgba(0,0,0,0.61); /* Some darker color when you click it */
    -webkit-border-radius: 50%;
  }

  body {
    margin: 0;
    color: #363232;
    font-family: 'Open Sans', sans-serif;
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
  
  svg {
    max-width: 100%;
  }

  .ant-picker-panel:last-child {
    width: 0;
  }

  .ant-picker-panel:last-child .ant-picker-header {
    position: absolute;
    right: 0;
  }

  .ant-picker-panel:last-child .ant-picker-header .ant-picker-header-prev-btn,
  .ant-picker-panel:last-child .ant-picker-header .ant-picker-header-view {
    visibility: hidden;
  }

  .ant-picker-panel:last-child .ant-picker-body {
    display: none;
  }

  @media (min-width: 768px) {
    .ant-picker-panel:last-child {
      width: 280px !important;
    }

    .ant-picker-panel:last-child .ant-picker-header {
      position: relative;
    }

    .ant-picker-panel:last-child .ant-picker-header .ant-picker-header-prev-btn,
    .ant-picker-panel:last-child .ant-picker-header .ant-picker-header-view {
      visibility: initial;
    }

    .ant-picker-panel:last-child .ant-picker-body {
      display: block;
    }
  }
`;
