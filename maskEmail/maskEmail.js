
// mask email's user name with asteriks 
function maskEmail(email){
  let atIndex = email.indexOf('@');
  let userName = email.slice(0, atIndex)
  let domain = email.slice(atIndex);
  let firstChar = email[0]
  let lastChar = userName.length-1;
  let maskedEmail = "*".repeat(userName.length-2);

  return firstChar +  maskedEmail +email[lastChar]  +domain

}

let email = "apple.pie@example.com";
console.log(maskEmail(email))