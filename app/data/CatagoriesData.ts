export const titles = {
  fruits: "Trái cây",
  vegetable: "Rau",
  sweety: "Bánh kẹo",
  meat: "Thịt",
  dairyProducts: "Sữa",
  drinking: "Đồ uống",
  personalCare: "Chăm sóc cá nhân",
  dailyConsummer: "Hàng ngày",
}

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

export const CatagoriesData = [
  {
    cartId: cartIds.fruits,
    title: titles.fruits,
    total: "746",
    image: {
      uri:
        "https://firebasestorage.googleapis.com/v0/b/foodapp-539a8.appspot.com/o/catagory-fruits.jpg?alt=media&token=215cfa71-04ba-48e9-882f-ec62766ecd49",
    },
  },
  {
    cartId: cartIds.vegetable,
    title: titles.vegetable,
    total: "926",
    image: {
      uri:
        "https://firebasestorage.googleapis.com/v0/b/foodapp-539a8.appspot.com/o/catagory-vegetables.jpg?alt=media&token=56d8bd4c-95ec-4971-8866-147cd4a28d6b",
    },
  },
  {
    cartId: cartIds.sweety,
    title: titles.sweety,
    total: "4385",
    image: {
      uri:
        "https://firebasestorage.googleapis.com/v0/b/foodapp-539a8.appspot.com/o/catagory-sweety.jpg?alt=media&token=3f744da3-da31-4ddc-afb7-1a3fbae188b0",
    },
  },
  {
    cartId: cartIds.meat,
    title: titles.meat,
    total: "268",
    image: {
      uri:
        "https://firebasestorage.googleapis.com/v0/b/foodapp-539a8.appspot.com/o/catagory-meats.jpeg?alt=media&token=16c9d45a-72fc-4691-b222-3646a1a2dda3",
    },
  },
  {
    cartId: cartIds.dairyProducts,
    title: titles.dairyProducts,
    total: "926",
    image: {
      uri:
        "https://firebasestorage.googleapis.com/v0/b/foodapp-539a8.appspot.com/o/catagory-dairyProducts.jpg?alt=media&token=4ebc0fcd-00ef-4e53-bbc2-b5c2da60140f",
    },
  },
  {
    cartId: cartIds.drinking,
    title: titles.drinking,
    total: "9237",
    image: {
      uri:
        "https://firebasestorage.googleapis.com/v0/b/foodapp-539a8.appspot.com/o/catagory-drinks.jpg?alt=media&token=aad3261a-8979-48f6-a4d9-c575c940f327",
    },
  },
  {
    cartId: cartIds.personalCare,
    title: titles.personalCare,
    total: "583",
    image: {
      uri:
        "https://firebasestorage.googleapis.com/v0/b/foodapp-539a8.appspot.com/o/catagory-personalCare.png?alt=media&token=f74f97bf-e871-418d-949a-cf717c50b04d",
    },
  },
  {
    cartId: cartIds.dailyConsummer,
    title: titles.dailyConsummer,
    total: "583",
    image: {
      uri:
        "https://firebasestorage.googleapis.com/v0/b/foodapp-539a8.appspot.com/o/catagory-dailyConsummer.jpg?alt=media&token=fbe0adfe-e098-4a38-b824-19ef868ff3e8",
    },
  },
]

const CatagoriesDataToFireStore = [
  { name: titles.fruits, total: "746" },
  { name: titles.vegetable, total: "926" },
  { name: titles.sweety, total: "4385" },
  { name: titles.meat, total: "268" },
  { name: titles.dairyProducts, total: "926" },
  { name: titles.drinking, total: "9237" },
  { name: titles.personalCare, total: "583" },
  { name: titles.dailyConsummer, total: "583" },
]
