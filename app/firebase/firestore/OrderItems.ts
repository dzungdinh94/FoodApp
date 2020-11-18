import firestore from "@react-native-firebase/firestore"
import { CODE_RANGE, ORDER_ITEMS_COLLECTION } from "./allCollectionName"
import { addDataToCollection, getDataFromDoc } from "../firestoreFunction"

export async function createNewOrderItem(orderId: string, productId: string, quantity: string) {
  let orderItemId = ""
  for (let index = 0; index < CODE_RANGE; index++) {
    orderItemId += Math.round(Math.random() * 9)
  }
  let newData = {
    orderItemId,
    orderId,
    productId,
    quantity,
  }
  try {
    await addDataToCollection(ORDER_ITEMS_COLLECTION, newData)
  } catch (error) {
    console.log(error)
  }
}

export async function getOrderItemDataById(orderItemId: string) {
  try {
    let response = await firestore()
      .collection(ORDER_ITEMS_COLLECTION)
      .where("orderItemId", "==", orderItemId)
      .get()
    let result = response.docs[0].data()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}
