//Loại bỏ lặp trong một mảng
//Đầu vào một mảng
//Đầu ra là một mảng không lặp
export function Unduplicated(array) {
  //Initial setup
  let noDuplicatedArray = []
  let noDuplicatedValue
  let index
  let copyArray = [...array]
  //Lặp đến khi nào copyArray về 0
  while (copyArray.length > 0) {
    //Gán biến kiểm tra vào đầu
    noDuplicatedValue = copyArray[0]
    //Loại bỏ phần từ đầu tiên trong copyArray
    copyArray.splice(0, 1)
    //Loại bỏ tất cả phần tử trùng lặp trong copyArray
    index = 0
    if (copyArray.length > 0) {
      while (index < copyArray.length) {
        if (copyArray[index] === noDuplicatedValue) {
          copyArray.splice(index, 1)
        } else index++
      }
    }
    //Gán giá trị vào mảng noDuplicatedArray
    noDuplicatedArray.push(noDuplicatedValue)
  }
  return noDuplicatedArray
}
