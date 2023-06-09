const bcrypt = require("bcrypt");

exports.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw error;
  }
};

exports.comparePassword = async (password, hashed) => {
  try {
    const match = await bcrypt.compare(password, hashed);
    return match;
  } catch (error) {
    throw error;
  }
};

/*
The bcrypt function genSalt is called with a salt round factor of 12. The salt round factor determines the complexity of the hashing algorithm and affects the time it takes to generate a hash. Higher values increase security but also increase the computational cost.

return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err, salt) => {
        if (err) {
            reject(err);
        }
        // ...
    });
});



bcrypt.genSalt(12, (err, salt) => {
    if (err) {
        reject(err);
    }
    bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
            reject(err);
        }
        resolve(hash);
    });
});



*/
