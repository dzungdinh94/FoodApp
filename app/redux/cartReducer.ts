const cart = []
//itemInCart:{product,quantity}
export default function reducer(state = cart, action) {
  let copyState = [...state]
  let result = []
  let productIds = []
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      if (copyState.length == 0) {
        result.push({ product: action.payload, quantity: 1 })
      } else {
        //Check productId
        copyState.map((item, index) => {
          productIds.push(item.product.productId)
          if (item.product.productId === action.payload.productId) {
            copyState[index].quantity++
          }
        })
        if (productIds.indexOf(action.payload.productId) < 0) {
          copyState.push({ product: action.payload, quantity: 1 })
        }
        result = [...copyState]
      }
      return result
    case "REMOVE_PRODUCT_FROM_CART":
      //find
      copyState.map((item) => {
        if (item.product.productId === action.payload.productId) {
          item.quantity--
          if (item.quantity > 0) {
            result.push(item)
          }
        }
      })
      //Check quantity if=0 ->remove from state
      return result
    default:
      return state
  }
}
