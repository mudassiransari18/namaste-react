export function filterData(searchText, resData) {
    return resData.filter(restaurant => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()));
}