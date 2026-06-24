function filterData(searchText, allRestaurants) {
  if (!searchText.trim()) {
    return allRestaurants;
  }

  return allRestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase()),
  );
}
// return filterData;
export default filterData;