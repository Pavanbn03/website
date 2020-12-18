export const pageTransition = {
  duration: 0.5,
};
export const pageVariantsLeftToRight = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  in: {
    opacity: 1,
    x: "0",
  },
  out: {
    opacity: 0,
    x: "100vw",
  },
};
export const pageVariantsRightToLeft = {
  initial: {
    opacity: 0,
    x: "100vw",
  },
  in: {
    opacity: 1,
    x: "0",
  },
  out: {
    opacity: 0,
    x: "-100vw",
  },
};
