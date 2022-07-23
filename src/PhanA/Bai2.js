let arrayLen = prompt("Nhập số lượng người trong hàng:");
let firstArray = [];
for (let i = 0; i < arrayLen; i++) {
  firstArray.push(Number(prompt(`Nhập cân nặng người thứ ${i+1}:`)));
}
const alternatingSums = (array) => {
  let secondArray = [0,0];
  for (let i = 0; i < array.length; i++) {
    (i%2===0) ? secondArray[0]+=firstArray[i] : secondArray[1]+=firstArray[i];
  }
  return secondArray;
}
alert(`Input: [${firstArray}] \nOutput: [${alternatingSums(firstArray)}]`);