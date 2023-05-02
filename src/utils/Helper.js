function filterDataUsingRestaurantName(searchText,restaurants){
  const filterData = restaurants.filter((restaurant) =>
      (restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()))
    );
    return filterData;
}

function filterDataUsingRestaurantCuisines(searchText,restaurants){
  const filterData = restaurants.filter((restaurant) =>{
      for(let i =0;i<restaurant?.data?.cuisines.length;i++){
              if(restaurant?.data?.cuisines[i].toLowerCase()?.includes(searchText.toLowerCase()))return true;
      }
      return false;
});
    return filterData;
}


export function filterData(searchText, restaurants, checkName, checkCuisine) {
    filterDataUsingName = checkName?(filterDataUsingRestaurantName(searchText,restaurants)):([]);
    filterDataUsingCuisines = checkCuisine?(filterDataUsingRestaurantCuisines(searchText,restaurants)):([]);
    const filterData = [...new Set([...filterDataUsingName,...filterDataUsingCuisines])];
    console.log(filterData)
    return filterData;
  }
  
