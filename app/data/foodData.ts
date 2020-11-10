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
        name: "Sữa tươi tiệt trùng",
        cartId: cartIds.dairyProducts,
        price: "30",
        discountPrice: "30",
        unit: "lít",
        image: {
          uri: "https://www.bynew.live/wp-content/uploads/2019/10/3-215.jpg",
        },
      },
      {
        name: "Sữa chua",
        cartId: cartIds.dairyProducts,
        price: "24",
        discountPrice: "24",
        unit: "lít",
        image: {
          uri:
            "https://vcdn-suckhoe.vnecdn.net/2019/05/22/yaourt-trai-cay-1558506277-7055-1558506582.png",
        },
      },
      {
        name: "Phô mai Mozzarella",
        cartId: cartIds.dairyProducts,
        price: "198",
        discountPrice: "198",
        unit: "kg",
        image: {
          uri:
            "https://bizweb.dktcdn.net/100/021/951/products/pho-mai-mozzarella-cat-san-550x.jpg?v=1453368948880",
        },
      },
      {
        name: "Nước tăng lực Monster",
        cartId: cartIds.drinking,
        price: "150",
        discountPrice: "150",
        unit: "lốc 6 lon",
        image: {
          uri:
            "https://cdn.tgdd.vn/Products/Images/3226/142227/bhx/loc-6-lon-cao-nuoc-tang-luc-monster-energy-355ml-201901301033149408.jpg",
        },
      },
      {
        name: "Nước có gas Coca-cola",
        cartId: cartIds.drinking,
        price: "8",
        discountPrice: "8",
        unit: "lon",
        image: {
          uri: "https://cf.shopee.vn/file/d8d4a36f436bc147eb74a7965f97bd36",
        },
      },
      {
        name: "Nước có gas Pepsi",
        cartId: cartIds.drinking,
        price: "8",
        discountPrice: "8",
        unit: "lon",
        image: {
          uri: "https://www.pepsi.com/en-us/uploads/images/social-share.jpg?mtime=20180110134930",
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
            "https://sohanews.sohacdn.com/thumb_w/660/2020/photo1589423513636-1589423513869-crop-15894236902972117002672.jpg",
        },
      },
      {
        name: "Dầu gội đầu Clear",
        cartId: cartIds.personalCare,
        price: "98",
        discountPrice: "98",
        unit: "chai 340ml",
        image: {
          uri:
            "https://salt.tikicdn.com/cache/w1200/ts/product/72/2f/79/19d9e878170700f73d9ed333f0777800.jpg",
        },
      },
      {
        name: "Sữa tắm Dove",
        cartId: cartIds.personalCare,
        price: "90",
        discountPrice: "90",
        unit: "chai 500ml",
        image: {
          uri: "https://cf.shopee.vn/file/d3439bdf07b97fff2b8dff852bab7e1d",
        },
      },
      {
        name: "Tương ớt",
        cartId: cartIds.dailyConsummer,
        price: "13",
        discountPrice: "13",
        unit: "chai 250g",
        image: {
          uri:
            "https://salt.tikicdn.com/cache/w1200/ts/product/81/7a/f5/4d59e665374f5992220109364e5512cf.jpg",
        },
      },
      {
        name: "Nước mắm",
        cartId: cartIds.dailyConsummer,
        price: "35",
        discountPrice: "35",
        unit: "chai 500ml",
        image: {
          uri:
            "https://zenmart.vn/Resources/Zenmart/Product/2020/02/1266/8936136160689-nuoc-mam-nam-ngu-750ml-637162552349281142.jpg",
        },
      },
    ]
  },
}
