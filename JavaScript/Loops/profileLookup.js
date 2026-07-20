let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

const lookUpProfile = (name, prop) => {
  for (let c = 0; c < contacts.length; c++) {
    let contact = contacts[c];
    if (contact.firstName === name) {
      if (contact.hasOwnProperty(prop)) {
        return contact[prop];
      } else {
        return "No such property"
      }
    } 
  }
  return "No such contact"
}