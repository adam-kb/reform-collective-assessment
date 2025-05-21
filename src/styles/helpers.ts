export const getClamp = (min: number, max: number, capWidth: number) => {
  const vw = ((max - min) / (capWidth - 375)) * 100;
  return `clamp(${min}px, ${vw.toFixed(3)}vw, ${max}px)`;
};
