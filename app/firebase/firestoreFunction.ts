import firestore from "@react-native-firebase/firestore"

export async function getDataFromDoc(collectionName: string, documentName: string) {
  try {
    let response = await firestore().collection(collectionName).doc(documentName).get()
    return response.data()
  } catch (error) {
    return console.log(error)
  }
}

export async function getAllDataFromCollection(collectionName: string) {
  try {
    let response = []
    let datas = await firestore().collection(collectionName).get()
    for (let doc of datas.docs) {
      response.push(doc.data())
    }
    return response
  } catch (error) {
    return console.log(error)
  }
}

export async function addDataToCollection(collectionName: string, data: object) {
  try {
    let response = await firestore().collection(collectionName).add(data)
    return response
  } catch (error) {
    return console.log(error)
  }
}

export async function setDataToDoc(collectionName: string, documentName: string, data: object) {
  try {
    await firestore().collection(collectionName).doc(documentName).set(data)
    console.log("Set Document Data Success!")
  } catch (error) {
    console.log("Set Document Data Fail!")
    console.log(error)
  }
}
