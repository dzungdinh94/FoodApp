import auth from "@react-native-firebase/auth"
import { createNewProfile } from "./userProfileCollection"

export const TestAccount = {
  email: "jane.doe@example.com",
  password: "SuperSecretPassword!",
}

export const TestAccount2 = {
  email: "hoan@example.com",
  password: "SuperSecretPassword!",
}
//handle sign up with email and password
export async function FB_SignUpWithEmail(email: string, password: string, username: string) {
  try {
    if (email.trim() === "" || password.trim() === "" || username.trim() === "") {
      console.error("Không được để trống Mật khẩu hoặc Tên đăng nhập")
      return false
    }
    await auth().createUserWithEmailAndPassword(email, password)
    await auth().currentUser.updateProfile({
      displayName: username,
    })
    console.log("User account created & signed in!")
    console.log("email=", auth().currentUser.email)
    console.log("password=", password)
    console.log("displayName=", auth().currentUser.displayName)
    await createNewProfile(
      auth().currentUser.email,
      auth().currentUser.displayName,
      password,
      auth().currentUser.metadata.creationTime,
    )
    return true
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      console.error("Email này đã được dùng!")
    }

    if (error.code === "auth/invalid-email") {
      console.error("Email không hợp lệ!")
    }
    console.log(error)
    return false
  }
}
//handle Sign In with email and password
export async function FB_SignInEmail(email: string, password: string) {
  try {
    if (email.trim() === "" || password.trim() === "") {
      console.error("Không được để trống Mật khẩu hoặc Tên đăng nhập")
      return
    }
    await auth().signInWithEmailAndPassword(email, password)
    console.log(`Đăng nhập thành công với email="${email}" và password="${password}"`)
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      console.error("Email không tồn tại! Hãy đăng ký tài khoản mới")
    }
    if (error.code === "auth/wrong-password") {
      console.error("Sai mật khẩu! Vui lòng nhập lại")
    }
    if (error.code === "auth/invalid-email") {
      console.error("Email không hợp lệ! Vui lòng nhập lại")
    }
    console.log(error.code)
    console.log(error)
  }
}
//handle Sign Out
export async function FB_signOut() {
  try {
    await auth().signOut()
    console.log("Đăng xuất thành công")
  } catch (error) {
    console.error(error.code)
    console.log(error)
  }
}
