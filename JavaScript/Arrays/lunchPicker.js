const lunches = [];
let item = "Tacos"
function addLunchToEnd(lunches, item) {
  lunches.push(item);
  console.log(`${item} added to the end of the lunch menu.`);
  return lunches;
}

function addLunchToStart(lunches, item) {
  lunches.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return lunches;
}

function removeLastLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let item = lunches.pop();
    console.log(`${item} removed from the end of the lunch menu.`);
  }
  return lunches;
}

function removeFirstLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let item = lunches.shift();
    console.log(`${item} removed from the start of the lunch menu.`)
  }
  return lunches;
}

function getRandomLunch(lunches) {
  const arrLength = lunches.length;
  const random = Math.floor(Math.random() * arrLength);
  const randomLunch = lunches[random];
  if (lunches.length === 0) {
    console.log("No lunches available.");
  } else {
    console.log(`Randomly selected lunch: ${randomLunch}`);
  }
}

function showLunchMenu(lunches) {
  if (lunches.length > 0) {
    console.log(`Menu items: ${lunches.join(", ")}`);
    return lunches;
  } else {
    console.log("The menu is empty.");
    return "The menu is empty";
  }
}