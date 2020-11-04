import firestore from "@react-native-firebase/firestore"
import { CODE_RANGE, FAVORITES_COLLECTION } from "./allCollectionName"
import { addDataToCollection, getDataFromDoc } from "../firestoreFunction"

export async function createNewFavorite(productId: string, userId: string) {
  let favoriteId = ""
  for (let index = 0; index < CODE_RANGE; index++) {
    favoriteId += Math.round(Math.random() * 9)
  }
  let newData = {
    favoriteId,
    productId,
    userId,
  }
  try {
    await addDataToCollection(FAVORITES_COLLECTION, newData)
    console.log("Create new Favorite")
  } catch (error) {
    console.log(error)
  }
}

export async function removeFavorite(productId: string, userId: string) {
  try {
    let response = await firestore()
      .collection(FAVORITES_COLLECTION)
      .where("userId", "==", userId)
      .where("productId", "==", productId)
      .get()
    let docId = response.docs[0].id
    let deleteReponse = await firestore().collection(FAVORITES_COLLECTION).doc(docId).delete()
    console.log("Delete Favorite")
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getFavoriteDataById(favoriteId: string) {
  try {
    let response = await firestore()
      .collection(FAVORITES_COLLECTION)
      .where("favoriteId", "==", favoriteId)
      .get()
    let result = response.docs[0].data()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}
