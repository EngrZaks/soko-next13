export const findMatches = (searchString: string, data: any) => {
  return data.filter(
    (product: {
      name: string;
      category: string;
      brand: string;
      description: string;
    }) => {
      const regex = new RegExp(searchString, "gi");
      if (searchString.length === 0) return;
      return (
        product.name.match(regex) ||
        product.category.match(regex) ||
        (product.brand && product.brand.match(regex)) ||
        product.description.match(regex)
      );
    }
  );
};

export function noWCommas(x: number) {
  return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : x;
}

export function shorten(strng: string, limit: number) {
  if (strng.length <= limit) {
    return strng;
  } else {
    return strng.slice(0, limit) + "...";
  }
}
