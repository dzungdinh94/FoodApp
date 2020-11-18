import firestore from "@react-native-firebase/firestore"
import { CODE_RANGE, ORDERS_COLLECTION } from "./allCollectionName"
import { addDataToCollection, getDataFromDoc } from "../firestoreFunction"

export async function createNewOrder(
  addressId: string,
  payment: string,
  status: string,
  userId: string,
) {
  let orderId = ""
  for (let index = 0; index < CODE_RANGE; index++) {
    orderId += Math.round(Math.random() * 9)
  }
  let newData = {
    orderId,
    addressId,
    payment,
    status,
    userId,
  }
  try {
    await addDataToCollection(ORDERS_COLLECTION, newData)
  } catch (error) {
    console.log(error)
  }
}

export async function getOrderDataById(orderId: string) {
  try {
    let response = await firestore()
      .collection(ORDERS_COLLECTION)
      .where("orderId", "==", orderId)
      .get()
    let result = response.docs[0].data()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}
