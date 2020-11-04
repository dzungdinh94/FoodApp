import { titles } from "./CatagoriesData"

//Change every firebase
const cartIds = {
  fruits: "3564054338",
  vegetable: "6438816520",
  sweety: "7371431267",
  meat: "6139766724",
  dairyProducts: "5511673371",
  drinking: "9571125647",
  personalCare: "3574255068",
  dailyConsummer: "3314586214",
}

export const foodData = {
  data: () => {
    return [
      { name: "Mù tạt xanh", type: titles.vegetable, Price: 10, discountPrice: 10 },
      { name: "Bơ lạc", type: titles.sweety, Price: 10, discountPrice: 10 },
      { name: "Bưỡi Diễn", type: titles.fruits, Price: 40, discountPrice: 40 },
      { name: "Táo xanh", type: titles.fruits, Price: 20, discountPrice: 20 },
      { name: "Bí đỏ", type: titles.vegetable, Price: 50, discountPrice: 50 },
      { name: "Cà chua", type: titles.vegetable, Price: 25, discountPrice: 25 },
      { name: "Đu đủ", type: titles.fruits, Price: 40, discountPrice: 40 },
      { name: "Kiwi tươi", type: titles.fruits, Price: 150, discountPrice: 120 },
      { name: "Thăn lợn", type: titles.meat, Price: 120, discountPrice: 120 },
      { name: "Bông cải xanh", type: titles.vegetable, Price: 30, discountPrice: 15 },
      { name: "Cà rốt", type: titles.vegetable, Price: 20, discountPrice: 20 },
      { name: "Chuối hữu cơ", type: titles.fruits, Price: 50, discountPrice: 50 },
      { name: "Thịt Bò", type: titles.meat, Price: 100, discountPrice: 100 },
    ]
  },
}

export const foodDataToFirestore = {
  data: () => {
    return [
      {
        name: "Mù tạt xanh",
        cartId: cartIds.vegetable,
        price: "10",
        discountPrice: "10",
        unit: "cân",
        image: {
          uri:
            "https://media.ex-cdn.com/EXP/media.cpcs.vn/files/f1/nguyenbinhvtv-143712113749-wasabi.jpg",
        },
      },
      {
        name: "Bơ lạc",
        cartId: cartIds.sweety,
        price: "10",
        discountPrice: "10",
        unit: "túi",
        image: {
          uri:
            "https://buaanhoanhao.vn/wp-content/uploads/2016/08/c%C3%A1ch-l%C3%A0m-b%C6%A1-l%E1%BA%A1c.jpg",
        },
      },
      {
        name: "Bưỡi Diễn",
        cartId: cartIds.fruits,
        price: "40",
        discountPrice: "40",
        unit: "cân",
        image: {
          uri: "https://dungculamvuon.net/resources/2019/10/cay-buoi-dien-2.jpg",
        },
      },
      {
        name: "Táo xanh",
        cartId: cartIds.fruits,
        price: "20",
        discountPrice: "20",
        unit: "cân",
        image: {
          uri:
            "https://bizweb.dktcdn.net/100/083/428/products/700-x-520-tao-xanh-my-1.jpg?v=1478845352957",
        },
      },
      {
        name: "Bí đỏ",
        cartId: cartIds.vegetable,
        price: "50",
        discountPrice: "50",
        unit: "cân",
        image: {
          uri:
            "https://vinmec-prod.s3.amazonaws.com/images/20200516_075746_243987_bi-do-1.max-800x800.jpg",
        },
      },
      {
        name: "Cà chua",
        cartId: cartIds.vegetable,
        price: "25",
        discountPrice: "25",
        unit: "cân",
        image: {
          uri: "https://icdn.dantri.com.vn/thumb_w/640/2019/05/18/ca-chua-1558139604071.jpg",
        },
      },
      {
        name: "Đu đủ",
        cartId: cartIds.fruits,
        price: "40",
        discountPrice: "40",
        unit: "cân",
        image: {
          uri:
            "https://giadinh.mediacdn.vn/thumb_w/600/2019/10/21/du-du-15716576208051079324886.jpg",
        },
      },
      {
        name: "Kiwi tươi",
        cartId: cartIds.fruits,
        price: "150",
        discountPrice: "120",
        unit: "cân",
        image: {
          uri:
            "https://image.baonghean.vn/w607/Uploaded/2020/nkdkswkqoc/201711/original/images2073088_bna_5a1fc6f644b8a.jpg",
        },
      },
      {
        name: "Thăn lợn",
        cartId: cartIds.meat,
        price: "120",
        discountPrice: "120",
        unit: "cân",
        image: { uri: "https://img.timviecdaubep.com/2019/12/thit-lon-than.jpg" },
      },
      {
        name: "Bông cải xanh",
        cartId: cartIds.vegetable,
        price: "30",
        discountPrice: "15",
        unit: "cân",
        image: {
          uri:
            "https://ajumagarden.com/content/images/thumbs/0010070_bong-cai-xanh-baby-sup-lo-con.jpeg",
        },
      },
      {
        name: "Cà rốt",
        cartId: cartIds.vegetable,
        price: "20",
        discountPrice: "20",
        unit: "cân",
        image: {
          uri:
            "https://lh3.googleusercontent.com/proxy/KX5W1KFS5CU641j0B7Wj8pKov0h-8PcbZPvKtbGablcq75QI5w7s5zmERqboCNaspqgW98xPMWmF8KP8mB6bPCkPw1G5PMsH5A_WuSnAKK1C1Lf8n5V1l-qG",
        },
      },
      {
        name: "Chuối hữu cơ",
        cartId: cartIds.fruits,
        price: "50",
        discountPrice: "50",
        unit: "cân",
        image: {
          uri:
            "https://product.hstatic.net/1000371541/product/chuoi-500x500_30ecf249160d4fbd83c0e767b56df7e0_grande.png",
        },
      },
      {
        name: "Thịt Bò",
        cartId: cartIds.meat,
        price: "100",
        discountPrice: "100",
        unit: "cân",
        image: {
          uri:
            "https://lh3.googleusercontent.com/proxy/Y0tukY4j22Q4H5MorHF63_o-feMdKRDyR_w4Dq8PJ6MV-UM9TmGJX9oFt-WqbB0FFlXGTjLnWhz6lua9zGogyftZKJ-UizR2n2La3jl-rmHCSXgMdno",
        },
      },
    ]
  },
}
