const SortProducts = ({
  sortList,
  categoryName,
  priceMinus,
  pricePlus,
  newTextValue,
}) => {
  let sortedList = [...sortList];

  if (categoryName === "price: low-high") {
    sortedList = sortedList.sort((a, b) => a.priceMax - b.priceMax);
  } else if (categoryName === "price: high-low") {
    sortedList = sortedList.sort((a, b) => b.priceMax - a.priceMax);
  }

  const filteredList = sortedList.filter((e) => {
    const isPriceInRange =
      (!pricePlus || e.priceMax <= pricePlus) && e.priceMax >= priceMinus;
    const isNewTextIncluded =
      !newTextValue ||
      e.title.toLowerCase().includes(newTextValue.toLowerCase());
    return isPriceInRange && isNewTextIncluded;
  });

  return filteredList;
};

export default SortProducts;
