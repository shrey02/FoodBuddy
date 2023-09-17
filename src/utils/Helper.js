function filterDataUsingRestaurantName(searchText,restaurants){
  const filterData = restaurants.filter((restaurant) =>
      (restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()))
    );
    //console.log(filterData);
    return filterData;
}

function filterDataUsingRestaurantCuisines(searchText,restaurants){
  const filterData = restaurants.filter((restaurant) =>{
      for(let i =0;i<restaurant?.info?.cuisines.length;i++){
              if(restaurant?.info?.cuisines[i].toLowerCase()?.includes(searchText.toLowerCase()))return true;
      }
      return false;
});
    return filterData;
}


export function filterData(searchText, restaurants, checkName, checkCuisine) {
    filterDataUsingName = checkName?(filterDataUsingRestaurantName(searchText,restaurants)):([]);
    filterDataUsingCuisines = checkCuisine?(filterDataUsingRestaurantCuisines(searchText,restaurants)):([]);
    const filterData = [...new Set([...filterDataUsingName,...filterDataUsingCuisines])];
    //console.log(filterData)
    return filterData;
  }
  
