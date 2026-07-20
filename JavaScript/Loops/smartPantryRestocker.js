const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

const parseShipment = (rawData) => {
  const result = [];
  const seenSkus = [];
  for (let i = 0; i < rawData.length; i++) {
    const [sku, name, qty, expires, zone] = rawData[i].split("|");
    if (seenSkus.includes(sku)) {
      continue;
    }
    seenSkus.push(sku);

    const item = {
      sku: sku,
      name: name,
      qty: Number(qty),
      expires: expires,
      zone: zone || "general"
    };
    result.push(item);
  }
  return result;
};

const planRestock = (pantry, shipment) => {
  const actions = [];
  for (let i = 0; i < shipment.length; i++) {
    const item = shipment[i]
    if (item.qty <= 0) {
      actions.push({type: "discard", item: item});
    } else if (pantry.some(pantryItem => pantryItem.sku === item.sku)) {
      actions.push({type: "restock", item: item});
    } else if (!pantry.some(pantryItem => pantryItem.sku === item.sku))  {
      actions.push({type: "donate", item: item});
    }
  }
  return actions;
}

const groupByZone = (actions) => {
  const groups = {};
  for (let i = 0; i < actions.length; i++) {
    const zoneName = actions[i].item.zone;
    if (!groups[zoneName]) {
      groups[zoneName] = [];
    }
    groups[zoneName].push(actions[i]);
  }
  return groups;
};

const clonePantry = (pantry) => {
  const clone = [];
  for (let i = 0; i < pantry.length; i++) {
    const cloneObj = {...pantry[i]};
    clone.push(cloneObj);
  }
  return clone;
}

let parsed = parseShipment(rawData);
let actions = planRestock(pantry, parsed);
let grouped = groupByZone(actions);
console.log(grouped);