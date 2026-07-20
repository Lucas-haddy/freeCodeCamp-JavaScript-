const repeatStringNumTimes = (str, num) => {
  if (num <= 0) {
    return ''
  } else {
    let repeated = '';
    for (let r = 0; r < num; r++) {
      repeated += str
    }
    return repeated
  } 
};