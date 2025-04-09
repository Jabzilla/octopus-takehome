export const formatPence = (penceValue: number) => {
  const poundFormatter = new Intl.NumberFormat("en-gb", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const numPenceInAPound = 100;
  return poundFormatter.format(penceValue / numPenceInAPound);
};
