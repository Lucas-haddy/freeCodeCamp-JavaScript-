const mutation = (array) => {
  const target = array[0].toLowerCase();
  const test = array[1].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    let letter = test[i];
    if (!target.includes(letter)) {
      return false;
    }; 
  };
  return true;
};