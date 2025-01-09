const arr = Array.from({length:100}, () => Math.floor(Math.randam()*1000));
console.log(arr);

const pattern_A = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++){
    if (!result.includes(arr[i])){
      result.push(arr[i]);
    }
  }
  return result;
}

const pattern_B = (arr) => {
  const result = [];
  const obj = {};
  for (let num of arr){
    if (!obj[num]){
      obj[num] = true;
      result.push(num);
    }
  }
  return result;
}
