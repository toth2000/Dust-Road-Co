const signIn = async (req, res) => {
  res.send("Sign In Route");
};

const signUp = async (req, res) => {
  res.send("Sing Up Route");
};

module.exports = { signIn, signUp };
