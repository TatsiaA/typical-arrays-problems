
exports.min = function min(array) {
 if (array.length > 0 || array !== undefined) {
   
    let mini = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < mini) {
     mini = array[i];
    }  
  } return mini;
} else {
  return 0;
}
};

exports.max = function max(array) {
  if (array.length > 0 || array !== undefined) {
    
let maxi = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] > maxi) {
        maxi = array[i];

    }
}
return maxi;
  } else {
    return 0;
  }
   };


exports.avg = function avg (array) {
  if (array.length > 0 || array !== undefined) {
    
let avgr = 0,
    sum = 0;
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
avgr = sum / array.length;
return avgr;
  } else {
    return 0;
  
  }

};
