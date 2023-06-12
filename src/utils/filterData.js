
export function filterData(serchText, restaurant) {
    let data = restaurant.filter((res) => {
        if (!res?.data?.data?.message) {
            //console.log(res?.data?.data?.name)
            return res?.data?.data?.name
                .toLowerCase()
                .includes(serchText.toLowerCase());
        }
    });
    console.log(data);
    return data;
}