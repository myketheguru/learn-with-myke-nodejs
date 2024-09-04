export const formatNumber = (balance: number | string, fixed = 2) => {
  return Number(Number(balance).toFixed(fixed)).toLocaleString("en-US");
};
