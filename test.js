function odd (num){
  let array = [];
  for(let i=1 ; i<=num ; i++){
    if(i%2 !=0){
      continue;
    }else array.push(i);
  }
  return array;
}
console.log(odd(50));
