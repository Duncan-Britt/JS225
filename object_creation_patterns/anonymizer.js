const Account = (function() {
  function anonymize() {
    let displayName = '';
    for (let i = 0; i < 16; i++) {
      let chrCode = Math.floor(Math.random() * 200 + 49);
      displayName += String.fromCharCode(chrCode);
    }
    return displayName;
  }

  function ifValid(ipass, callback) {
    if (ipass === password) {
      return callback();
    } else {
      return 'Invalid Password';
    }
  }

  let email;
  let password;
  let firstName;
  let lastName;

  return {
    init(iemail, ipassword, ifirstName, ilastName) {
      email = iemail;
      password = ipassword;
      firstName = ifirstName;
      lastName = ilastName;
      this.displayName = anonymize();
      return this;
    },

    reanonymize() {
      this.displayName = anonymize();
    },

    resetPassword(oldPass, newPass) {
      return ifValid(oldPass, () => {
        password = newPass;
        return true;
      });
    },

    email(ipassword) {
      return ifValid(ipassword, () => email);
    },

    firstName(ipassword) {
      return ifValid(ipassword, () => firstName);
    },

    lastName(ipassword) {
      return ifValid(ipassword, () => lastName);
    },
  }
})();

// const account = Object.create(Account).init('bobo@bobus.com', '123456', 'Larkin', 'Po');
// console.log(account);

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false
