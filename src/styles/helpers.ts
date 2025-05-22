export const getClamp = (min: number, max: number, capWidth: number) => {
  const vw = ((max - min) / (capWidth - 375)) * 100;
  return `clamp(${min}px, ${vw.toFixed(3)}vw, ${max}px)`;
};

export const getClampFrom = (minPx: number, maxPx: number, minVw = 501, maxVw = 1440) => {
  const slope = (maxPx - minPx) / (maxVw - minVw);
  const yAxisIntersection = minPx - slope * minVw;
  const fluid = `${yAxisIntersection.toFixed(2)}px + ${(slope * 100).toFixed(4)}vw`;
  return `clamp(${minPx}px, ${fluid}, ${maxPx}px)`;
}
