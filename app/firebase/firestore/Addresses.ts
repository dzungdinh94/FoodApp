import firestore from "@react-native-firebase/firestore"
import { ADDRESSES_COLLECTION, CODE_RANGE } from "./allCollectionName"
import { addDataToCollection, getDataFromDoc } from "../firestoreFunction"

export async function createNewAdress(name: string, location: string, userId: string) {
  let addressId = ""
  for (let index = 0; index < CODE_RANGE; index++) {
    addressId += Math.round(Math.random() * 9)
  }
  let newData = {
    addressId,
    name,
    location,
    userId,
  }
  try {
    await addDataToCollection(ADDRESSES_COLLECTION, newData)
  } catch (error) {
    console.log(error)
  }
}

export async function getAdressDataById(addressId: string) {
  try {
    let response = await firestore()
      .collection(ADDRESSES_COLLECTION)
      .where("addressId", "==", addressId)
      .get()
    let result = response.docs[0].data()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}
