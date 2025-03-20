export const parseCurrency = (value: string) => {
  return Number(
    value.replace(/\./g, "").replace(",", ".").replace("R$", "").trim()
  );
};
