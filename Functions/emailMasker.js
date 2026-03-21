let email = "apple.pie@example.com";

function maskEmail(email) {
  const address = email.indexOf("@");
  const slice = email.slice(1, address -1);
  const replace = email.replace(slice, "*".repeat(slice.length));
  return(replace); 
}
console.log(maskEmail(email))

email = "freecodecamp@example.com";
console.log(maskEmail(email));
email = "info@test.dev";
console.log(maskEmail(email));
email = "user@domain.org"
console.log(maskEmail(email));