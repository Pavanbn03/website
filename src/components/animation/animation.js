export const pageTransition = {
  duration: 0.5,
};
export const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "100vw",
  },
};
// export const variants = {
//   enter: (direction) => {
//     return {
//       x: direction > 0 ? 100 : -100,
//       opacity: 0,
//     };
//   },
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//   },
//   exit: (direction) => {
//     return {
//       zIndex: 0,
//       x: direction < 0 ? 100 : -100,
//       opacity: 0,
//     };
//   },
// };
