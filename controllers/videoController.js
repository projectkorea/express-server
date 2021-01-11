export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => res.send("search", { pageTitle: "Search" });
export const upload = (req, res) => res.send("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.send("videoDetail", { pageTitle: "VideoDetail" });
export const editVideo = (req, res) =>
  res.send("editVideo", { pageTitle: "EditVideo" });
export const deleteVideo = (req, res) =>
  res.send("deleteVideo", { pageTitle: "DeleteVideo" });
