function arraySort(x){
  let arr1 = [];
  let arr2 = [];
  for(var i = 0; i < x.length; i++){
    if(typeof x[i] === 'string') arr1.push(x[i]);
    if(typeof x[i] === 'number') arr2.push(x[i]);
  }

  return {arr1, arr2};
}

export default arraySort;
