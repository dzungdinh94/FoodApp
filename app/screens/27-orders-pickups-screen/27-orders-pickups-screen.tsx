import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle,TouchableOpacity,View } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { Icon } from 'react-native-elements';
import styles from './styles'


const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

export const OrdersPickupsScreen = observer(function OrdersPickupsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.bag}>
                    <Icon
                        name="shopping-bag"
                        type="fontisto"
                        size={54}
                        color={`rgb(147, 194, 47)`}
                    />
                </View>
                <View style={styles.choNhanHang}>
                    <Text style={styles.textNhanHang}>Chờ Nhận Hàng</Text>
                    <Text style={styles.textWait}>Hàng của bạn đã được chuẩn bị xong và chờ bạn tới nhận</Text>
                </View>
                <View style={styles.don}>
                    <Text style={styles.textMaDon}>Đơn#: 998001</Text>
                    <Text style={styles.textTime}>25/12/2020 - 3:27 chiều</Text>
                </View>
            </View>
            <View style={styles.dow}>
                <View style={styles.thongTin}>
                    <View style={styles.listThongTin}>
                        <View style={styles.icon}>
                            <Icon
                                name="map-marker-radius"
                                type="material-community"
                                size={36}
                                color={`rgb(147, 194, 47)`}
                            />
                        </View>

                        <View style={styles.thongTinNhanHang}>
                            <Text style={styles.textTittle}>Vị trí kho hàng</Text>
                            <Text style={styles.textSup}>227 Thanh Xuân Trung</Text>
                        </View>
                        <Icon 
                                name="navigate-next"
                                type="materialIcons"
                                size={36}
                                color={`rgb(147, 194, 47)`}
                            />
                    </View>

                    <View style={styles.listThongTin}>
                        <View style={styles.icon}>
                            <Icon
                                name="timer"
                                type="ionicons"
                                size={36}
                                color={`rgb(147, 194, 47)`}
                            />
                        </View>

                        <View style={styles.thongTinNhanHang}>
                            <Text style={styles.textTittle}>Ước lượng thời gian</Text>
                            <Text style={styles.textSup}>Thời gian di chuyển từ chỗ bạn: 23 min</Text>
                        </View>
                    </View>

                    <View style={styles.listThongTin}>
                        <View style={styles.icon}>
                            <Icon
                                name="phone"
                                type="font-awesome"
                                size={36}
                                color={`rgb(147, 194, 47)`}
                            />
                        </View>

                        <View style={{ flex: 1 }}>
                            <Text style={styles.textTittle}>Gọi điện cho kho</Text>
                            <Text style={styles.textSup}>Hãy gọi cho nhân viên kho nếu bạn muốn</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.touchable} >
                    <Text style={styles.textTouchable}>Hoàn tất nhận hàng</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Screen>
  )
})
