import firestore from "@react-native-firebase/firestore"
import { CODE_RANGE, PRODUCTS_COLLECTION } from "./allCollectionName"
import { setDataToDoc } from "../firestoreFunction"
import { updateTotalItemInCatagory } from "./Catagories"

export async function createNewProducts(
  unit: string,
  price: string,
  name: string,
  image: object,
  cartId: string,
  discountPrice: string,
) {
  let productId = ""
  for (let index = 0; index < CODE_RANGE; index++) {
    productId += Math.round(Math.random() * 9)
  }
  let newData = {
    productId,
    name,
    unit,
    price,
    image,
    cartId,
    discountPrice,
  }
  try {
    //Add data to collection
    await setDataToDoc(PRODUCTS_COLLECTION, productId, newData)
    //Update total products in that cartID
    let countItemInCart = await countProductsInCartId(cartId)
    await updateTotalItemInCatagory(cartId, countItemInCart)
  } catch (error) {
    console.log(error)
  }
}

export async function getProductDataById(productId: string) {
  try {
    let response = await firestore()
      .collection(PRODUCTS_COLLECTION)
      .where("productId", "==", productId)
      .get()
    let result = response.docs[0].data()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function countProductsInCartId(cartId: string) {
  try {
    let response = await firestore()
      .collection(PRODUCTS_COLLECTION)
      .where("cartId", "==", cartId)
      .get()
    let numberOfProductInCartId = response.docs.length
    return numberOfProductInCartId
  } catch (error) {
    console.log(error)
    return null
  }
}
