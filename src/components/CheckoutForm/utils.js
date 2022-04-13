export const shippingCountries = [
  {
    value: "united states",
    label: "United States",
  },

  {
    value: "bangladesh",
    label: "Bangladesh",
  },

  {
    value: "germany",
    label: "Germany",
  },
];

export const shippingSubdivisions = [
  {
    value: "california",
    label: "California",
  },

  {
    value: "new york",
    label: "New York",
  },

  {
    value: "chittagong",
    label: "Chittagong",
  },
  {
    value: "berlin",
    label: "Berlin",
  },

  {
    value: "aachen",
    label: "Aachen",
  },
];

export const shippingOptions = [
  {
    value: "normal",
    label: "Normal",
  },

  {
    value: "fast",
    label: "Fast",
  },
];


export function isEmptyObj(obj){
  for(let item in obj) return false
  return true
}
