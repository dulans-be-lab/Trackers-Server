const bcrypt = require('bcryptjs');

// password eka encrypt karala eka adaaala thenata return karanawa
exports.encryptPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        reject(err)
      } else {
        resolve(hash);
      }
    });
  });
};

// userPassword ekai accountPassword ekai aran, accountPassword eka decrypt karala, password deka match wenawada nedda kiyala return karanawa 
exports.decryptPassword = (userPassword, accountPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(userPassword, accountPassword, (err, authentication) => {
      if (err) {
        reject(err);
      } else {
        resolve(authentication);
      }
    })
  });
}
