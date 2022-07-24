let arrayLen = prompt("Nhập số lượng số trong mảng:");
let numArray = [];
for (let i = 0; i < arrayLen; i++) {
  numArray.push(prompt(`Nhập số nguyên thứ ${i+1}:`));
}
const adjacentElementsProduct = (array) => {
  let product = null;
  for (let i = 0; i < array.length-1; i++) {
    if (i===0) {
      product=array[i]*array[i+1];
      continue;
    }
    (product < array[i]*array[i+1]) ? product=array[i]*array[i+1] : product=product;   
  }
  return product
}
alert("Tích lớn nhất: "+adjacentElementsProduct(numArray));
