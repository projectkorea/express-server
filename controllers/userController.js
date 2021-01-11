export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Logout" });
export const userDetail = (req, res) =>
  res.render("user detail", { pageTitle: "UserDeatil" });
export const editProfile = (req, res) =>
  res.render("edit profile", { pageTitle: "EditProfile" });
export const changePassword = (req, res) =>
  res.render("change password", { pageTitle: "Password" });
