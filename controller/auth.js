// const signIn = async (req, res) => {
//   res.send("Sign In Route");
// };

// const signUp = async (req, res) => {
//   res.send("Sing Up Route");
// };

const loginController = async (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
}

const successController = async (req, res) => {
  res.sendFile(__dirname + "/public/success.html");
}

module.exports = { loginController, successController };
