const initStore = {
    Product: [],
  
 }
export default function reducer(state = initStore, action) {
    switch (action.type) {
        case "ADD_PRODUCT": {
            let result = { ...state }
            //input productId
            let indexOfProductID = state.Product.findIndex((item) => item.itemProduct.id == action.payload.id)
            //Tìm quantity
            if (indexOfProductID < 0) { result.Product.push({itemProduct:action.payload,quantity: 1 }) }
            else { result.Product[indexOfProductID].quantity++ }
            //Tạo kết quả
            console.log(result)
            return result
        }
        case "REMOVE_PRODUCT": {
            let productSelected = { ...state }
            let findProductId = state.Product.findIndex((item) => item.itemProduct.id == action.payload.id)
            if (findProductId < 0) { productSelected.Product.push({ itemProduct: action.payload, quantity: -1}) }
            else { productSelected.Product[findProductId].quantity--}
            console.log(productSelected)
            return productSelected
        }
        default:
            return initStore;
    }
}