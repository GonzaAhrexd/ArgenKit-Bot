export const diasHasta = (date: Date): number => {
  const today = new Date();
  return Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
};
