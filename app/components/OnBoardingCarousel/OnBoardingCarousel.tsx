import React, { useCallback, memo, useRef, useState } from "react"
import { FlatList, View, Dimensions, Text, StyleSheet, Image } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { spacing } from "../../theme"

const { width: windowWidth, height: windowHeight } = Dimensions.get("window")

const styles = StyleSheet.create({
  //Slide
  slide: {
    width: windowWidth,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 67,
    marginTop: 43,
  },
  // Pagniation
  pagination: {
    position: "relative",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 62,
  },
  paginationDot: {
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: "white",
    width: 8,
    height: 8,
    borderRadius: 8,
  },
  paginationDotInactive: {
    backgroundColor: "rgba(255,255,255,0.4)",
    width: 8,
    height: 8,
    borderRadius: 8,
  },
  content: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  carousel: {},
})

const slideList = [
  {
    id: 1,
    content: "Tìm cửa hàng gần bạn nhất",
  },
  {
    id: 2,
    content: "Thức ăn tươi ngon, an toàn đang chờ bạn",
  },
  {
    id: 3,
    content: "Giao hàng nhanh chóng",
  },
]

const Slide = ({ data }) => {
  return (
    <View style={styles.slide}>
      <Text style={styles.content}>{data.content}</Text>
    </View>
  )
}

function Pagination({ index }) {
  return (
    <View style={styles.pagination} pointerEvents="none">
      {slideList.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.paginationDot,
              index === i ? styles.paginationDotActive : styles.paginationDotInactive,
            ]}
          />
        )
      })}
    </View>
  )
}

export default function OnBoardingCarousel({}) {
  const [index, setIndex] = useState(0)
  const indexRef = useRef(index)
  indexRef.current = index
  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width
    const index = event.nativeEvent.contentOffset.x / slideSize
    const roundIndex = Math.round(index)

    const distance = Math.abs(roundIndex - index)

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = 0.4 < distance

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex)
    }
  }, [])

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback((s) => String(s.id), []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      [],
    ),
  }

  const renderItem = useCallback(function renderItem({ item }) {
    return <Slide data={item} />
  }, [])

  return (
    <View
      style={{
        width: windowWidth,
      }}
    >
      <FlatList
        data={slideList}
        style={styles.carousel}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <Pagination index={index}></Pagination>
    </View>
  )
}
