import firestore from "@react-native-firebase/firestore"
import { CODE_RANGE, USER_COLLECTION } from "./allCollectionName"
import { addDataToCollection, getDataFromDoc } from "../firestoreFunction"

export async function createNewUser(email: string, name: string, phone: string) {
  let userId = ""
  for (let index = 0; index < CODE_RANGE; index++) {
    userId += Math.round(Math.random() * 9)
  }
  let newUserData = {
    userId,
    email,
    name,
    phone,
  }
  try {
    let response = await addDataToCollection(USER_COLLECTION, newUserData)
    if (response) {
      console.log("Tạo thành công User mới")
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getUserDataById(userId: string) {
  try {
    let response = await firestore().collection(USER_COLLECTION).where("userId", "==", userId).get()
    let result = response.docs[0].data()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getUserIdByEmail(email: string) {
  try {
    let response = await firestore().collection(USER_COLLECTION).where("email", "==", email).get()
    let result = response.docs[0].data()
    return result.userId
  } catch (error) {
    console.log(error)
    return null
  }
}
