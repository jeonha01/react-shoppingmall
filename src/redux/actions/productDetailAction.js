// function getProductDetail(id) {
//     return async (dispatch, getState) => {
//         let url = `https://my-json-server.typicode.com/jeonha01/react-shoppingmall/products/${id}`
//         let response = await fetch(url)
//         let data = await response.json()
//         console.log(data)
//         dispatch({ type: "GET_PRODUCTDETAIL_SUCCESS", payload: { data } })
//     }
// }

// export const productDetailAction = { getProductDetail }