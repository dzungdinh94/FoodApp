import firestore from "@react-native-firebase/firestore"
import auth from "@react-native-firebase/auth"
import { AuthContext } from "../navigation"
import { getDataFromDoc } from "./firestoreFunction"

export const USER_COLLECTION_NAME = "testUsers"
const userDB = firestore().collection(USER_COLLECTION_NAME)
const CODE_RANGE = 8

export async function createNewProfile(
  email: string,
  userName: string,
  password: string,
  creationTime,
) {
  //Prepare data
  let data = {
    userName,
    password,
    creationTime,
  }
  //Create new data
  try {
    let responseSendData = await userDB.doc(email).set(data)
    console.log(responseSendData)
  } catch (error) {
    console.log(error)
  }
}

export async function updateProfile(email: string, updateData: object) {
  //check email exist in data collection
  if (!email) {
    console.log("email not exist!!!")
    return false
  }
  //Update phoneNumber and generate random key
  try {
    let profile = await getDataFromDoc(USER_COLLECTION_NAME, email)
    let verificationPhoneCode = ""
    for (let index = 0; index < CODE_RANGE; index++) {
      verificationPhoneCode += Math.round(Math.random() * 9)
    }
    // updateData = { ...updateData, verificationPhoneCode }
    let profileDataAfterUpdate = { ...profile, ...updateData, verificationPhoneCode }
    try {
      await userDB.doc(email).set(profileDataAfterUpdate)
      console.log(`Update ${email} profile successful`)
    } catch (error) {
      console.log(error)
    }
    console.log(`Mã xác thực của bạn là: ${verificationPhoneCode}`)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export async function verifyPhoneCode(verifyCodeInput: string) {
  let email = auth().currentUser.email
  try {
    //Get User Profile
    let profile = await getDataFromDoc(USER_COLLECTION_NAME, email)
    //Compare verifyCodeInput
    if (verifyCodeInput === profile.verificationPhoneCode) {
      console.log("Trùng mã tiến hành bước tiếp tiếp")
      return true
    }
    console.log("Khác mã bắt nhập lại")
    return false
  } catch (error) {
    console.log(error)
    return false
  }
}
