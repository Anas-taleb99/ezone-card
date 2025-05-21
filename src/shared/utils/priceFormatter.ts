export const priceLYDFormatter = (number: number, culture = "ar") =>
  new Intl.NumberFormat(`${culture}`, {
    style: "currency",
    currency: "LYD",
    minimumFractionDigits: 0,
    numberingSystem: "latn",
  }).format(number);
