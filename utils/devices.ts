const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
};

export const devices = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  iphone:
    "only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)",
  iphonePlus:
    "only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait)",
  iphoneX:
    "only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait)",
  pixel:
    "screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
  pixelXl:
    "screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 4) and (orientation: portrait)",
  phones: "(max-width: 767px)",
  desktopL: "(min-width: 1300px)",
  desktop: "(min-width: 768px) and (max-width: 1299px)",
  mobileSmall: "(min-width: 320px) and (max-width: 430px)",
  desktopLarge: `(min-width: 768px) and (max-width:1023px)`,
};
