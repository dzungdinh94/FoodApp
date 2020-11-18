import firestore from "@react-native-firebase/firestore"
import { CATEGORIES_COLLECTION, CODE_RANGE } from "./allCollectionName"
import { addDataToCollection, getDataFromDoc, setDataToDoc } from "../firestoreFunction"
import { async } from "validate.js"

export async function createNewCategory(name: string, image: object, cartId: string) {
  let newData = {
    cartId,
    name,
    image,
  }
  try {
    await setDataToDoc(CATEGORIES_COLLECTION, cartId, newData)
    console.log("Create new catagory success")
  } catch (error) {
    console.log(error)
  }
}

export async function getCategoryDataById(cartId: string) {
  try {
    let response = await firestore()
      .collection(CATEGORIES_COLLECTION)
      .where("cartId", "==", cartId)
      .get()
    let result = response.docs[0].data()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function updateTotalItemInCatagory(cartId: string, total) {
  try {
    await firestore().collection(CATEGORIES_COLLECTION).doc(cartId).update({ total })
  } catch (error) {
    console.log(error)
  }
}
