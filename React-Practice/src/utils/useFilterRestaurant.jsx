export function useFilterRestaurant() {
  function filterData(searchText, allRestaurants) {
    if (!searchText.trim()) {
      return allRestaurants;
    }

    const filterData = allRestaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase()),
    );
    return filterData;
  }
};
